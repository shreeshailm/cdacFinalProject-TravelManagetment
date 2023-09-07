

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useUser } from "../context/UserContext";
import { Authenticate} from "../../services/User/SignInApi"
import { Container, Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


function LoginUser() {
 
    const navigate = useNavigate();

   // const { handleLogin } = useContext(NoteContext);
    const { login } = useUser();
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const SignIn = async () =>
  {
    const response = await Authenticate(email,password);
      
     if(response==null)
    {
        toast.error('Invalid Credential')
        setTimeout (()=>{
          navigate('/login')
      },[1000])
    }
    else if (response['token'] != null) 
    {
      const userId=response.id
      const role=response.roles[0]
      const username=response.firstName
      sessionStorage['userId'] = userId;
      debugger

      login(userId,role,username);


        const JWT=response['token']
        sessionStorage['token'] = JWT;

        
        toast.success('Login successful');
        setEmail('');
        setPassword('');

             if(role=="HOTEL_OWNER"){
              
                navigate('/gethotelbyuserid')
         
             }
             else if(role=="CUSTOMER"){
             
                navigate('/AllPackage')
          
             }
             else if(role=="ADMIN"){
              
                navigate('/ManagePackage')
           
             }
    }
   
  }

    return (
      <Container>
      <ToastContainer position='top-right' autoClose={2500} />
      <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Login To Your Account</h2>

      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className='text-center'>
              <br></br>
              <Button variant='primary' onClick={SignIn}>
                Login
              </Button>
            </div>
          </Form>

          <div className='text-center mt-3'>
            Don't have an account? <Link to='/register'>Register</Link>
          </div>
        </Col>
      </Row>
    </Container>
      );
}

export default LoginUser