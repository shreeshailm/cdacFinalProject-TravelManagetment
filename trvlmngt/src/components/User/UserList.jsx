import { useEffect, useState } from 'react';
import { config, constants } from '../../utils/constants';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  
  const url = constants.serverUrl ; 
  const GetAll = ()=>
  {
    axios.get(`${url}/api/auth`,config)
    .then((response) => {
      console.log('Printing users data', response.data);
      setUsers(response.data);
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });
  }

  useEffect(() => {
    GetAll();
  }, []);

  const DeleteUser = (id) => {
    debugger;
    console.log('Printing id', id);
      axios.delete(`${url}/api/auth/delete/${id}`)
      .then((response) => {
        console.log(' deleted successfully', response.data);
        GetAll();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
      debugger;
  };

debugger;
  return (
    <div className='container'>
      <br></br>
      <center>
      <h3>List of Active Users</h3>
      </center>
      <hr />
      <div>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
            <th>Id</th>
            <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>PAN Number</th>
              <th>Birth-Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((employee) => 
            {
              debugger;
              return(<tr key={employee.userId}>
                <td>{employee.userId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.panNumber}</td>
                <td>{employee.dob}</td>
                {/* <td>
                  <Link
                    className='btn btn-info'
                    onClick={() => {
                      UpdateUser(employee.userId);
                 }}
                  >
                    Update
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                         DeleteUser(employee.userId);
                    }}
                  >
                    Delete
                  </button>
                </td> 
              </tr>
)}
)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
