
import { toast } from "react-toastify";
import { addHotelInventoryapi } from "../../services/addHotelInventoryapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();


function AddHotelInventory() {
    const [availableroom, setAvailableroom] = useState('')
    const [roomprice, setRoomprice] = useState('')
    const [date, setDate] = useState('')
    const navigate=useNavigate();
  

      const addinventory=async()=>{
      
        if (availableroom.length === '') {
        toast.error('Please enter name')
      } else if (roomprice.length === '') {
        toast.error('Please enter description')
      }else if (date.length === '') {
          toast.error('Please enter address')
        }else{
            const response = await addHotelInventoryapi(availableroom,roomprice,date)

            if (response > 0) {
                const iventoryId=response
                sessionStorage['iventoryId'] = iventoryId
                toast.success('iventory added successfully');
                setTimeout(()=>{
                //   navigate("/gethotelbyuserid")
                history.back();
                },(1000))
            }else {
                toast.error('could not add inventory please try again')
              }

        }
    
    
    
    }

    return ( 
       <div>
        <br></br><br></br><br></br><br></br>

        <div className='row'>
            <div className="col"></div><div className="col"></div>
            <div className="col">
            <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>AvailableRoom</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                    setAvailableroom(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Room Price</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                    setRoomprice(e.target.value)
                }}
              />
              
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Date</label>
              <input
                type='date'
                className='form-control'
                onChange={(e) => {
                    setDate(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              
              <button onClick={addinventory} className='btn btn-success'>
                AddInventory
              </button>


            </div>
            <br></br><br></br>
            </div>
          </div>
            <div className="col"></div><div className="col"></div>
        </div>

       </div>
     );
}

export default AddHotelInventory;