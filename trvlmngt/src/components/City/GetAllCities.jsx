import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { config, constants } from '../../utils/constants';
import AdminNavigation from '../../Navigate/AdminNav';


const CityList = () => {
  const [cities, setCities] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);
  const url = constants.serverUrl ;
 sessionStorage.setItem("cityId",cities.cityId);

const init=()=>{
    axios.get(`${url}/city`,config)
    .then((response) => {
      console.log('Printing city data', response.data);
      setCities(response.data);
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });
}

useEffect(() => {
    init();
  }, []);

//   useEffect(() => {
//     init();
//  }, [cities]);

  const handleDelete = (id) => {
    debugger;
    console.log('Printing id', id);
    axios.delete(`${url}/city/${id}`)
      .then((response) => {
        debugger;
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <>
    <div>
        <AdminNavigation/>
    </div>
    <div className='container'>
        <br></br>
      <h3>List of Cities</h3>
      <hr />
      <div>
        <Link to='/addCity' className='btn btn-primary mb-2'>
          AddCity
        </Link>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>State</th>
              <th>Country</th>
           </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr key={city.cityId}>
                <td>{city.cityName}</td>
                <td>{city.cityState}</td>
                <td>{city.cityCountry}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/update/${city.cityId}`}
                  >
                    Update
                  </Link>
                </td>

                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${employee.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(city.cityId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                <Link
                    className='btn btn-secondary'
                    to={`/getallhotels/${city.cityId}`}
                  >
                    Add Hotel
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default CityList;
