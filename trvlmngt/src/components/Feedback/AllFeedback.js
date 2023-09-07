import { useEffect, useState } from "react";
import Rating from 'react-rating-stars-component';
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { config } from "../../utils/constants";
import { createUrl } from "../../utils/utils";
import AdminNavigation from "../../Navigate/AdminNav";


function AllFeedback() {

    const [Allfeedbacks, setAllfeedbacks] = useState([])
    const url = createUrl('/feedback')

    const AllFeed = async () => {
        debugger;
        try {
            
            const result = await axios.get(url,config);
            setAllfeedbacks(result.data);
            
        }
        catch (error) {
            console.log("Error Occured" + error);
        }
        debugger;
    }

    useEffect(()=>{
        AllFeed();
    },[])

    return <>
            {/* <div style={{marginBottom:30}}>
                <AdminNavigation/>
            </div> */}
<center><h3>FEEDBACKS</h3></center>

<br />

<Container>
      <Row>
        {Allfeedbacks.map((feedback) => (
          <Col key={feedback.id} md={3}>
            <Card className="feedback-card ">
              <Card.Body>
                <Card.Title>{feedback.userName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {feedback.tourPackageName}
                </Card.Subtitle>
                <Card.Text>{feedback.comment}</Card.Text>
                <Card.Text>
                  <Rating
                    count={5}
                    value={feedback.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </>
}

export default AllFeedback;