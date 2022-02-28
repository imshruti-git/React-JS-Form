
import React from 'react'
import './table.css';


const Table = ({ datas, length }) => {
    console.log(datas);
  return (
    <div>
       
    {length > 0 && 
    
  <>
      <table>
          <thead>
          <tr>
              
              <th>name</th>
              <th>email</th>
              <th>number</th>
              <th>date of birth</th>
              <th>city</th>
              <th>country</th>
              <th>district</th>
              <th>province</th>
              <th>country</th>
              
          </tr>
          </thead>
          <tbody>
              {datas.map((d, index )=>(
                  <tr key={index}>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.number}</td>
                  <td>{d.DOB}</td>
                  <td>{d.city}</td>
                  <td>{d.country}</td>
                  <td>{d.district}</td>
                  <td>{d.province}</td>
                  <td>{d.country}</td>
              </tr>

              ))}
              
              </tbody>
         
         </table>
         </>
         }
  {length < 1 && <div>no entries</div>}

          
 
</div>

    
  )
}

export default Table