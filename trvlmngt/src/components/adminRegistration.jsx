
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { registerAdminapi } from '../services/registerAdminapi';

function RegisterAdmin() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [panNumber, setPannumber] = useState('');
    const [dob, setBirthdate] = useState('');
    const navigate = useNavigate();
    
    const addUser = async () => 
    {
          const response = await registerAdminapi(firstName,lastName,email,password,panNumber,dob)
          
          if (response['userId'] > 0) 
          {
              const userId=response['userId']
              sessionStorage['userId'] = userId;
              toast.success('userId admin successfully');
              setFirstname('');
              setLastname('');
              setEmail('');
              setPassword('');
              setPannumber('');
              setBirthdate('');

              setTimeout (()=>{
                navigate('/login')
            },[1000])

          }
          else 
          {
              toast.error('could not added User please try again')
          }
        }

    return ( <>
     
        <div >
          <ToastContainer position='top-right'/>
          <br></br>

      <h1 style={{ textAlign: 'center', margin: 10 }}>Welcome to our site Please Register Here First</h1>
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
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
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
              
              <button onClick={addUser} className='btn btn-success'>
                Register
              </button>


            </div>
            <br></br><br></br>
            
          </div>
        </div>
        <div className='col'></div><div className='col'></div>
      </div>
    </div>
    </> );
    }

export default RegisterAdmin;
