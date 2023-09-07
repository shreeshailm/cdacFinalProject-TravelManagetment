import { useEffect, useState } from "react";
import { config } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { createUrl } from "../../utils/utils";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavigation from "../../Navigate/AdminNav";
// import CityList from "../City/CityList";


function UpdPackage() {

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

    if(image)
    {
        debugger;
        const formData = new FormData();
        formData.append('imgFile', image);
       axios.post(imageUploadUrl,formData,config)
        
        .then(()=>{
            debugger;
            console.log("image uplaoded successfully");
        })
         .catch((error)=>{
            toast.error("image upload failed",error);
         })
         debugger;
    }

    const updatePackage = async () => {
        try{
            debugger;
            // const formData = new FormData();
            // formData.append('imgFile', image);

            // await axios.post(imageUploadUrl, formData, config);
      
            debugger;
                const body = {
                    packageName: name,
                    image:"",
                    packageDescription: desc,
                    noOfDays: noofdays,
                    price: price,
                    
                };
            debugger;
            axios.put(`${url}/updatePackage/${pid}`,body,config)
            
            .then(()=>{
                toast.success("package updated successfully!!");
               
                setTimeout(() => {
                    navigate('/ManagePackage')
                }, [2000]);
           
            })}catch(error){
           
                toast.error("something went wrong :(") 
            }
                   
            
      
        debugger;
    }

    return <>

        {/* <AdminNavigation/> */}


        <div class="jumbotron" style={{ marginTop:30 }}>
        <ToastContainer position='top-right' autoClose={2500}/>
            <div class="container">
                <center><h2>Update Package</h2></center>

            </div>
        </div>

        <div className="container-fluid text-center" style={{ marginTop:20 }}>

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">

                    <div>
                        <div><center><big>Name Of Package</big></center></div>
                        <input type="text" placeholder="Enter Package Name" className="form-control"
                         name="packageName" value={name} onChange={(e) => {setName(e.target.value)}}
                        ></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Package Description</big></center></div>
                        <input type="text" placeholder="Enter Package Description   " className="form-control"
                         name="packageDescription" value={desc} onChange={(e) => {setDesc(e.target.value)}}
                        ></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>No Of days</big></center></div>                        
                        <input type="text" placeholder="Enter no of days   " className="form-control"
                         name="noOfDays" value={noofdays} onChange={(e) => {setNoofdays(e.target.value)}}
                        ></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Price</big></center></div>
                        <input type="number" placeholder="Enter Price" className="form-control" name="price" value={price} 
                        onChange={(e) => {setPrice(e.target.value)}}></input>
                    </div>

                    <br></br>

                    {/* <div>
                        <div><center><big>Image</big></center></div>
                        <input type="file" className="form-control" name="image"  placeholder="upload image here"
                        onChange={(e) => {setImage(e.target.files[0])}}></input>
                    </div> */}

                    {/* <br></br>Select The Region<br></br><br></br>
                    <select class="form-select form-select-lg lg-3" aria-label=".form-select-lg example">
                        <option selected disabled>Open this select menu</option>
                        <option value="1">Get</option>
                        <option value="2">data</option>
                        <option value="3">from</option>
                        <option value="3">db</option>
                    </select> */}
                    <div>
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={updatePackage}>Update Package</button>

                    </div>


                </div>
                <div className="col-lg-2 sidenav">
                </div>
            </div>
        </div>  
    </>
}

export default UpdPackage;