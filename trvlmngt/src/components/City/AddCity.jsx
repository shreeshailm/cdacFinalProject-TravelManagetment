import { useState } from "react";
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { addCityapi } from "../../services/addCityapi";
import AdminNavigation from "../../Navigate/AdminNav";
import { toast } from "react-toastify";
function AddCity()
{
    const[name,setName]=useState('')
    // const[pin,setpin]=useState('')
    const[state,setState]=useState('')
    const[country,setCountry]=useState('')
    // const[userName,setUserName]=useState('')
    const navigate=useNavigate();
    // useEffect(()=>{
    //     const sessionUserName=sessionStorage.getItem('userName');
    //     if(sessionUserName){
    //         setUserName(sessionUserName);
    //     }
    // },[]);

  const addCity = async () => 
    {
        // if ((name.length === '') ||( pin.length === '' )|| (state.length === '')|| (country.length === '')) 
        //   {
        //     toast.error("Value can't be null");
        //   }else{
            debugger;
            const response = await addCityapi(name, state,country)
            console.log(response.data);
            debugger;
           if(response['cityId'] > 0)
          {
            const cityId=response['cityId']
            sessionStorage['cityId'] = cityId
            debugger;
            toast.success("city added successfully");   
            setName('');
            // setpin('');
            setState('');
            setCountry(''); 
        
              setTimeout(()=>{
                   navigate('/Citylist')
              },[2000])
          }
          else 
          toast.error('Something went Wrong')
           }
        return (         
            < >
            <div>
                <AdminNavigation/>
            </div>
            <center>
            <h1 style={{ textAlign: 'center', margin: 10,marginTop:30 }}>Add City Details</h1>
            </center>
            <br></br><br></br>
            <div>       
            {/* <ToastContainer position="top-left"/> */}
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
                  
                  <button onClick={addCity} className='btn btn-success'>
                    AddCity
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
    
    export default AddCity;