import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { config, constants } from "../../utils/constants";
import AdminNavigation from "../../Navigate/AdminNav";
function UpdateCity()
{
    const {did}=useParams();
    const[name,setName]=useState('')
    // const[pin,setpin]=useState('')
    const[state,setState]=useState('')
    const[country,setCountry]=useState('')
    // const [cities, setCities] = useState([]);
    const url = constants.serverUrl ;
    const navigate=useNavigate();
    
    // let id=parseInt(sessionStorage.getItem("cityId"));
 
    const getCity =()=>
    {
        debugger;
           console.log(did);
            axios.get(`${url}/city/${did}`)
            .then((response)=>{
                debugger;
                console.log("city data "+response.data)
                setName(response.data.cityName);
                // setpin(response.data.cityPin);
                setState(response.data.cityState);
                setCountry(response.data.cityCountry);
                debugger;
            })      
    }

    useEffect(()=>{
              getCity();
    },[])


    const updateCity=async()=>
        {
          const body = 
          {
           cityName:name,
          //  cityPin:pin,
           cityState:state,
           cityCountry:country
          };     
          
            axios.put(`${url}/city/updateCity/${did}`,body,config)
            .then(()=>
            {
              
              toast.success("city updated successfully :)");
              setTimeout(()=>{
                navigate('/Citylist')
           },[2000])
            })
            .catch((error) => {
              toast.error("Something went wrong :(");
            });
        }

        return (        
            < >  
            <div>
                <AdminNavigation/>
            </div>          
            <center>
            <h1 style={{ textAlign: 'center', margin: 10,marginTop:30 }}>Update City Details</h1>
            </center>
            <br></br><br></br>
            <div>       
            <ToastContainer position="top-left"/>
          <div className='row' >
            <div className='col'></div><div className='col'></div>
            <div className='col'>
              <div className='form'>
                
                <div className='mb-3'>
                  <label htmlFor=''>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                {/* <div className='mb-3'>
                  <label htmlFor=''>Pin</label>
                  <input
                    type='text'
                    className='form-control'
                    value={pin}
                    onChange={(e) => {
                     setpin(e.target.value)
                    }}
                  />
                  <input
                    type='file'
                    className='form-control'
                    onChange={(e) => {
                      setAddress(e.target.value)
                    }}
                  />
                </div> */}
                <div className='mb-3'>
                  <label htmlFor=''>State</label>
                  <input
                    type='text'
                    className='form-control'
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value)
                    }}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor=''>Country</label>
                  <input
                    type='text'
                    className='form-control'
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value)
                    }}
                  />
                </div>
                {/* <div className='mb-3'>
                  <label htmlFor=''>Description</label>
                  <textarea id='description'   name='description'  className='form-control'   rows='3'  required
                       onChange={(e) => {  setDescription(e.target.value); }}/>
                </div> */}
                <div className='mb-3'>
                  
                  <button onClick={updateCity} className='btn btn-success'>
                   Update City
                  </button>
    
    
                </div>
                <br></br><br></br>
                
              </div>
            </div>
            <div className='col'></div><div className='col'></div>
          </div>
        </div>
            </>
          );
    }
    
    export default UpdateCity;