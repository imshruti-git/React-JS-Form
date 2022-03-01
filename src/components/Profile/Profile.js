import React from 'react'
import { useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Profile = () => {


const location = useLocation();
 

  return (
        <div style={{height:'100vh'}}>
            <h3>Profiles</h3>
            <table>
          <thead>
          <tr>
              <th><ArrowDropDownIcon/> name</th>
              <th>email</th>
              <th>number</th>
              <th>dob</th>
              <th>city</th>
              <th>country</th>
              <th>district</th>
              <th>province</th>
              
              
          </tr>
          </thead>
          <tbody>
          {location.state.datas.map((d, index )=>(
                  <tr key={index}>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.number}</td>
                  <td>{d.DOB}</td>
                  <td>{d.city}</td>
                  <td>{d.country}</td>
                  <td>{d.district}</td>
                  <td>{d.province}</td>
                 
              </tr>

              ))}
             

           
              
              </tbody>
         
         </table>
        </div>
  )
}

export default Profile