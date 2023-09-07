import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { createBrowserHistory } from "history";


import { useParams } from "react-router-dom";
import { createUrl, log } from "../../utils/utils";
import axios from "axios";

function UpdateHotel() {

    
    const{hotelId} =useParams();
   
    let history = createBrowserHistory();
    const { ...user } = useUser();
  
    const [data,setData]=  useState({
        name:'',
        address:'',
        description:''
      });

      const changeHandler=(e)=>{
 
        setData((prev)=>{
          return{
            ...prev,[e.target.name]:e.target.value
          }
        })
      }

      const updatehotel = async () => {
        if (data.name.length === '') {
          toast.error('Please enter name')
        } else if (data.description.length === '') {
          toast.error('Please enter description')
        }else if (data.address.length === '') {
            toast.error('Please enter address')
          }else{
    
          
             
              const url =createUrl(`/hotel/${hotelId}`)
              console.log(url);
              const body = {
               
                  hotelName:data.name, hotelAddress:data.address,hotelDescription:data.description,userId:sessionStorage.getItem("userId")
                }
          
                try {
                   await axios.put(url, body)
                 
                  
                    history.back();
        
                
                  
                } catch (ex) {
                  log(ex)
                  return null
                }

    
          
    
            
    
              
    
          }
         
        }


    return (<>

        <div>
            <h1 style={{ textAlign: 'center', margin: 10 }}>Update Hotel Details</h1>
            <h2>{user.userId}</h2>
            <h2>{user.userRole}</h2>
            <div className='row'>
                <div className='col'></div><div className='col'></div>
                <div className='col'>
                    <div className='form'>
                        <div className='mb-3'>
                            <label htmlFor=''>Name</label>
                            <input
                                type='text'
                                value={data.name}
                                name='name'
                                className='form-control'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor=''>Address</label>
                            <input
                                type='text'
                                value={data.address}
                                name='address'
                                className='form-control'
                                onChange={changeHandler}
                            />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor=''>Description</label>
                            <textarea id='description'
                                value={data.description}
                                name='description' className='form-control' rows='3' required
                                onChange={changeHandler} />
                        </div>
                        <div className='mb-3'>

                            <button onClick={updatehotel} className='btn btn-success'>
                                AddHotel
                            </button>


                        </div>
                        <br></br><br></br>

                    </div>


                </div>

                <div className='col'></div><div className='col'></div>
            </div>
        </div>
    </>);
}

export default UpdateHotel;