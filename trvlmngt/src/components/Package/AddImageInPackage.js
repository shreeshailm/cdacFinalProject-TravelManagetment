import { useEffect, useState } from "react";
import { config } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { createUrl } from "../../utils/utils";
import axios from "axios";
import Navigation from "../../Navigate/Navigation";
import { useNavigate, useParams } from "react-router-dom";
// import CityList from "../City/CityList";


function AddImage() {

    const{pid}=useParams();

    const[name,setName]=useState('')
    const[noofdays,setNoofdays]=useState('')
    const[desc,setDesc]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState(null)
    const navigate=useNavigate();
    const url = createUrl('/tourpackage')
    const imageUploadUrl = `${url}/images/${pid}`;
   
   
   
    const getPackage = async () => {
        debugger;
        console.log(pid);
        axios.get(`${url}/${pid}`)
        .then((response)=>{
            debugger;
            console.log(response.data);
            setName(response.data.packageName);
            setDesc(response.data.packageDescription);
            // setImage(response.data.image);
            setNoofdays(response.data.noOfDays);
            setPrice(response.data.price);

            debugger;
        })
    }

    useEffect(()=>{
        getPackage();
    },[])

    // if(image)
    // {
    //     debugger;
    //     // const formData = new FormData();
    //     // formData.append('imgFile', image);
    // //    axios.post(imageUploadUrl,formData,config)
        
    //     .then(()=>{
    //         debugger;
    //         console.log("image uplaoded successfully");
    //     })
    //      .catch((error)=>{
    //         toast.error("image upload failed",error);
    //      })
    //      debugger;
    // }

    const updatePackage = async () => {
        try{
            debugger;
            const formData = new FormData();
            formData.append('imgFile', image);

            await axios.post(imageUploadUrl, formData, config);
      
            debugger;
                const body = {
                   
                    image: image,
                    
                    
                };
            debugger;
            axios.put(`${url}/updatePackage/${pid}`,body,config)
            
            .then(()=>{
                toast.success("package updated successfully!!");
               
                setTimeout(() => {
                    
                    navigate(`/detailsofpackage/${pid}`)
                }, [2]);
           
            })}catch(error){
           
                toast.error("something went wrong :(") 
            }
                   
            
      
        debugger;
    }

    return <>
{/* 
        <Navigation/> */}


        <div class="jumbotron" style={{ marginTop: "-19px" }}>
        <ToastContainer position='top-right' autoClose={2500}/>
            <div class="container">
                <center><h2>Add Image for Package</h2></center>

            </div>
        </div>

        <div className="container-fluid text-center">

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">


                    

                   

                    

                    <div>
                        <div><center><big>Image</big></center></div>
                        <input type="file" className="form-control" name="image"  placeholder="upload image here"
                        onChange={(e) => {setImage(e.target.files[0])}}></input>
                    </div>

                    
                    <div>
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={updatePackage}>ADD image</button>

                    </div>


                </div>
                <div className="col-lg-2 sidenav">
                </div>
            </div>
        </div>  
    </>
}

export default AddImage;