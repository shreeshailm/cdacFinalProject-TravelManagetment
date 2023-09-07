import { useEffect, useState } from 'react';
import { constants } from '../../utils/constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Prof = () => {
  const url = constants.serverUrl ; 
  const history = useNavigate();

  const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [panNumber, setPannumber] = useState('');
    const [dob, setBirthdate] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    let id=sessionStorage.getItem('userId');
    let uid=parseInt(id);

  const GetUser = ()=>
  {
    debugger
    
    axios.get(`${url}/api/auth/${uid}`)
    .then((response) => {
        debugger
      console.log('Printing user data', response.data);
      setFirstname(response.data.firstName);
      setLastname(response.data.lastName);
      setEmail(response.data.email);
      setPassword("");
      setPannumber(response.data.panNumber);
      setBirthdate(response.data.dob);
    })
    .catch((error) => {
        debugger
      console.log('Something went wrong', error);
    });
  }

  const resetForm = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setPannumber('');
    setBirthdate(''); 
  }

  const UpdateUser = ()=>
  {
   
  if(confirmPassword!=password){
    toast.error("password do not match");
  }
  else{
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      panNumber: panNumber,
      password: password,
      role: [
        "CUSTOMER"
      ],
      dob: dob,
    };
  

  axios.put(`${url}/api/auth/${uid}`, body)
      .then((response) => {
          debugger
        toast.success('Profile updated successfully!!')
        resetForm();
        history.back();
      })
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });
  }
  }

  useEffect(() => {
    GetUser();
  }, []);

debugger;
return (
    <>
    {/* <center><h2>Welcome {userName}, to our collabe </h2></center>
    <br></br><br></br> */}
    <div>
      <ToastContainer position='top-right' autoClose={2500}/>
      <br></br>
  <h1 style={{ textAlign: 'center', margin: 10 }}>My Profile</h1>
    <br></br>
  <div className='row'>
    <div className='col'></div><div className='col'></div>
    <div className='col'>
      <div className='form'>
        <div className='mb-3' bord>
          <label htmlFor=''>First Name</label>
          <input 
            type='text'
            className='form-control'
            value={firstName}
            onChange={(e) => {
              setFirstname(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            type='text'
            className='form-control'
            value={lastName}
            onChange={(e) => {
              setLastname(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input required
            type='text'
            className='form-control'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        
        <div className='mb-3'>
          <label htmlFor=''>PAN Number</label>
          <input
            type='text'
            className='form-control'
            value={panNumber}
            onChange={(e) => {
              setPannumber(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Date Of Birth</label>
          <input
            type='date'
            className='form-control'
            value={dob}
            onChange={(e) => {
              setBirthdate(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Set New Password</label>
          <input
            type='password'
            className='form-control'
           placeholder='Enter New Password '
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm New Password</label>
          <input
            type='password'
            className='form-control'
           placeholder='Confirm New Password '
           value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
        <br></br>

          <center><button onClick={()=>UpdateUser()} className='btn btn-info'>
            Update Profile
          </button></center>
          


        </div>
        <br></br><br></br>
        
      </div>
    </div>
    <div className='col'></div><div className='col'></div>
  </div>
</div>
    </>
  );
};

export default Prof;
