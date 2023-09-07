import React, { useEffect, useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { config, constants } from '../../utils/constants';
import axios from 'axios';

const PaymentPage = () => {
  const [userName, setUserName] = useState('');
  const [packageName, setPkgName] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [remainingTime, setRemainingTime] = useState(300); 
  const history = useNavigate();

  const url = constants.serverUrl ;
  const iid = sessionStorage.getItem("bookingId");

  const handlePayment = () => {
      toast.success("Payment Successful!!");
      setTimeout (()=>{
        history('/AllPackage')
    },[2000])
  };

  const init=()=>{
    debugger;
    axios.get(`${url}/booking/${iid}`,config)
    .then((response) => {
      console.log('Printing booking data', response.data);
      setUserName(response.data.userName);
      setPaymentAmount(response.data.price);
      setPkgName(response.data.tourPackageName);
      debugger;
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });
    debugger;
}

const cancel=()=>{
  debugger;
  axios.delete(`${url}/booking/${iid}`,config)
  .then((response) => {
    console.log('Printing booking data', response.data);
    debugger;
  })
  .catch((error) => {
    console.log('Something went wrong', error);
  });
  debugger;
}

  useEffect(() => {

    init();

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000); // 1000 milliseconds (1 second)

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      cancel();
      history('/AllPackage'); // Navigate to an expiration page
    }
    if ((remainingTime === 2))
    {
      toast.error("Payment Expired!!");
    }
  }, [remainingTime, history]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <ToastContainer position='top-right' autoClose={2000} />
        <br />
        <div style={{borderColor:"black",borderWidth:4}}>
        <h2 style={{ textAlign: 'center', margin: 10 }}>Make a Payment</h2>
        <br />
        <div style={{ marginTop: 20 }}>
          <h3>
          <p style={{ textAlign: 'center',color:"red" }}>
            Time Remaining: {formatTime(remainingTime)}
          </p>
          </h3>
          <br />
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'>
              <div className='form'>
                <Form.Group className='mb-3'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>PackageName</Form.Label>
                  <Form.Control
                    type='text'
                    value={packageName}
                    onChange={(e) => setPkgName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Payment Amount</Form.Label>
                  <Form.Control
                    type='number'
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </Form.Group>
                <div className='mb-3'>
                  <center>
                    <Button onClick={handlePayment} variant='btn btn-outline-success'>
                      Make Payment
                    </Button>
                  </center>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
