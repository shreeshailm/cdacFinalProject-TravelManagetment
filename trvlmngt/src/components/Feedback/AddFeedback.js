import { useState } from "react";
import { createUrl } from "../../utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import { config } from "../../utils/constants";
import axios from "axios";
import Navigation from "../../Navigate/Navigation";
import Rating from 'react-rating-stars-component';
import { useNavigate } from "react-router-dom";

function Feedback() {

    const [Feedback, setFeedback] = useState([{ rating: "", comment: " ", tourPackageId: "" }]);
    const navigate=useNavigate();
    const addFeedback= async ()=>{
        debugger;
        const url = createUrl('/feedback')

        const body = {
            rating: Feedback.rating,
            comment: Feedback.comment,
            tourPackageId: Feedback.tourPackageId,
            userId: sessionStorage.getItem("userId"),
          }
            try{
                const result= await axios.post(url,body,config);
                setTimeout(() => {
                    navigate('/AllFeedback');
                }, [2000]);
                toast.success("Feedback Added Successfully");
            }
            catch(error){
                console.log("Error Occured"+ error);
            }
            debugger;
    }
    
    const feedbackchange =(args)=>{
        var copyOffeedback={...Feedback};
        // console.log(args)
        copyOffeedback[args.target.name]=args.target.value;
        setFeedback(copyOffeedback);
     }
 

    return <>

        {/* <Navigation/> */}

        <div class="jumbotron" style={{ marginTop:30 }}>
        <ToastContainer position='top-right' autoClose={2500}/>
            <div class="container">
               <center>
               <h2>Add Feedback</h2>
               </center>

            </div>
        </div>

        <div className="row content" style={{ marginTop:30 }}>
            <div className="col-lg-5 sidenav"></div>
            <div className="col-lg-2 sidenav">
                <div><center><big>Rating</big></center></div>
                <center><Rating
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={Feedback.rating}
                    onChange={(newRating) => feedbackchange({ target: { name: 'rating', value: newRating } })}
                /></center>
            </div>
            <div className="col-lg-12 sidenav"></div>
            
            <div className="col-lg-5 sidenav"></div>
            <div className="col-lg-2 sidenav">
            <br></br>
                <div><center><big>Tour Package</big></center></div>
                <input type="number" placeholder="Enter Package Id" className="form-control" name="tourPackageId" value={Feedback.tourPackageId} onChange={feedbackchange}></input>
            </div>
            

        </div>
        <br></br>

        <div className="container" style={{ textAlign: "center", width: "600px" }}>
            <div class="form-outline lg-4">
                <textarea class="form-control" rows="7" name="comment" value={Feedback.comment} onChange={feedbackchange}></textarea>
            </div>
            <br></br>
            <button className="btn btn-primary" onClick={addFeedback}>Submit</button>
        </div>



    </>
}

export default Feedback;