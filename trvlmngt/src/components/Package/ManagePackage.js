import { useEffect, useState } from "react";
// import goa from "../../Common/goa.jpeg"
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import { config } from "../../utils/constants";
import { createUrl } from "../../utils/utils";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import LoginUser from "../User/Login";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminNavigation from "../../Navigate/AdminNav";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";


function ManagePackage() {

    const [AllPackages, setAllPackages] = useState([])
    const [cities, setCities] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState("");

    const [assignedCities, setAssignedCities] = useState([]);
    const url = createUrl('/tourpackage')
    const cityUrl = createUrl('/city')
    const AllPackage = async () => {
        try {

            const result = await axios.get(url, config);
            setAllPackages(result.data);

        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }


    //fetch cities
    const fetchCities = async () => {
        debugger;
        try {
            const result = await axios.get(cityUrl, config);
            setCities(result.data);

        } catch (error) {
            console.log("Error Occured while fetching cities: " + error);
        }
    };


    useEffect(() => {
        AllPackage();
        fetchCities();
    }, [])

    const handleCitySelect = (packageId, cityId) => {
        debugger;
        axios.post(`${url}/${packageId}/city/${cityId}`)
        toast.success("city assigned successfully!!")
        debugger;
    };

    const handleDelete = (id) => {
        debugger;
        console.log('printing id', id);
        axios.delete(`${url}/${id}`)
            .then((response) => {
                debugger;

                toast.success("package deleted suceessfully!!");
                AllPackage();
            })
            .catch((error) => {

                toast.error("is live package cannot delete it");
            });
    }


    return <>

        <AdminNavigation />

        <br />
        <ToastContainer position='top-right' autoClose={2500} />
        <Container>
            <Row>
                {AllPackages.map((packages) => (
                    <Col key={packages.id} md={3}>
                        <Card>
                            <Card.Img src={`${url}/images/${packages.id}`} alt="image here" />
                            <Card.Body>
                                <Card.Title>{packages.packageName}</Card.Title>
                                <Card.Text>{packages.packageDescription}</Card.Text>
                                <Card.Subtitle>{packages.price}</Card.Subtitle>

                                <br></br>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdown-basic"
                                        disabled={assignedCities.includes(selectedCityId)}
                                    >
                                        Select City
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {cities.map((city) => (
                                            <Dropdown.Item
                                                key={city.cityId}
                                                onClick={() => handleCitySelect(packages.id, city.cityId)}
                                            >
                                                {city.cityName}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <hr />
                                <Link className="btn btn-outline-primary" to={`/addimage/${packages.id}`} >AddImage and Description</Link><br></br>
                                <hr></hr>
                                <Link className="btn btn-info" to={`/updatepkg/${packages.id}`} >Update</Link>&nbsp;
                                <Link className="btn btn-danger" onClick={() => handleDelete(packages.id)}>Delete</Link>&nbsp;
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    </>
}

export default ManagePackage;