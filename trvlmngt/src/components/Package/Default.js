import { useEffect, useState } from "react";
// import goa from "../../Common/goa.jpeg"
import { Link } from "react-router-dom";
import axios from "axios";
import Navigation from "../../Navigate/Navigation";
import { config } from "../../utils/constants";
import { createUrl } from "../../utils/utils";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";


function AllPkg() {

    const [AllPackages, setAllPackages] = useState([])
    const url = createUrl('/tourpackage')
    const AllPackage = async () => {
        try {
            
            const result = await axios.get(url,config);
            setAllPackages(result.data);
            
        }
        catch (error) {
            console.log("Error Occured" + error);
        }
    }

    useEffect(()=>{
        AllPackage();
    },[])

    return <>
    <Container style={{marginTop:30}}>
        <Row>
            {AllPackages.map((packages) => (
                <Col key={packages.id} md={3}>
                    <Card>
                        <Card.Img variant="top" src={`${url}/images/${packages.id}`} alt="image here" />
                        <Card.Body>
                            <Card.Title>{packages.packageName}</Card.Title>
                            <Card.Text>{packages.packageDescription}</Card.Text>
                            <Card.Subtitle>{packages.price}</Card.Subtitle>
                            <Card.Footer>
                                <center>
                                    <Link className="btn btn-outline-success" to={`/getttt/${packages.id}`}>Book Package</Link>
                                </center>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
</>

}

export default AllPkg;