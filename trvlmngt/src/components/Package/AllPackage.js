import { useEffect, useState } from "react";
// import goa from "../../Common/goa.jpeg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "../../Navigate/Navigation";
import { config } from "../../utils/constants";
import { createUrl } from "../../utils/utils";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { toast } from "react-toastify";


function AllPackage() {

    const [AllPackages, setAllPackages] = useState([])
    // const ppid=null;
    const url = createUrl('/tourpackage')
    const bookUrl=createUrl('/booking')
    const navigate=useNavigate();
    const [booking,setBooking]=useState({
        bookingId: "",
        tourPackageId: "",
        userId: "",
        numberOfPerson:"" ,
        price: "",
        bookingDate: ""
      })

      const USERID=sessionStorage.getItem("userId");

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

    const addBooking=async(ppid,priiice)=>{
        debugger;
            const body=
            {
                    "tourPackageId": ppid,
                    "userId": USERID,
                    "numberOfPerson": 1,
                    "price": priiice
            }
              
           await axios.post(`${bookUrl}`,body,config)
            .then(()=>{
                console.log("booking added successfull")
               
            }).catch((error)=>
            {
                console.log("booking failure")
            })
            debugger;

    }


    return <>
    <Navigation />
    <Container>
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
                                    <Link className="btn btn-outline-success"  to={`/getttt/${packages.id}`} onClick={()=>{addBooking(packages.id,packages.price)}}  >Book Package</Link>
                                </center>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

<hr></hr>
        </Row>
    </Container>
</>

}

export default AllPackage;