import { useState , useEffect, useContext} from 'react';

import{toast} from 'react-toastify';
import { addHotelapi } from '../../services/addHotelapi';
import { Link, useNavigate } from 'react-router-dom';
import { log } from '../../utils/utils';

import { useUser } from '../context/UserContext';

function AddHotel() {

//const a= useContext(NoteContext);
const { ...user } = useUser();

  const navigate =useNavigate();

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




  useEffect(() => {
    // Retrieve the user's name from sessionStorage
    const storedUserName = sessionStorage.getItem('userName');

    if (storedUserName) {
    //  setUserName(storedUserName);
    }
  }, []);

  const addHotel = async () => {
    if (data.name.length === '') {
      toast.error('Please enter name')
    } else if (data.description.length === '') {
      toast.error('Please enter description')
    }else if (data.address.length === '') {
        toast.error('Please enter address')
      }else{

        try {
          const response = await addHotelapi(data.name, data.address,data.description,user.userId)

        if (response['hotelId'] > 0) {
            const hotelId=response['hotelId']
            sessionStorage['hotelId'] = hotelId
            toast.success('hotel added successfully');
            setData({
              name:'',
              address:'',
              description:''
            });
            navigate("/addhotelinventory");

        }else {
            toast.error('could not add hotel please try again')
          }

        } catch (error) {
          log(error);
          toast.error('server under maintainace please try later')
        }

          

      }
     
    }
    return (
        <>
        <center><h2>Welcome {user.userName} to our collabe </h2></center>
        <br></br><br></br>
        <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Add Hotel Details</h1>
   {/* <h2>{user.userId}</h2>
   <h2>{user.userRole}</h2> */}
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
                 name='description'  className='form-control'   rows='3'  required
                   onChange={changeHandler}/>
            </div>
            <div className='mb-3'>
              
              <button onClick={addHotel} className='btn btn-success'>
                AddHotel
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

export default AddHotel;