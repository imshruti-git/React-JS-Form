
import React, { useState } from 'react'
import './table.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';


const Table = ({ datas, setDatas, length, deleteEntry, editEntry }) => {

    const[order, setOrder] = useState("ASC");

    const sorting =(col)=>{
        if (order === "ASC"){
            const sorted = [...datas].sort((a,b)=>
                a[col].toLowerCase() >b[col].toLowerCase() ? 1: -1
            );
            setDatas(sorted);
            setOrder("DSC")
        }
        if (order === "DSC"){
            const sorted = [...datas].sort((a,b)=>
                a[col].toLowerCase() <b[col].toLowerCase() ? 1: -1
            );
            setDatas(sorted);
            setOrder("ASC")
        }
    };
console.log(datas.name);
  return (
    <div className='container'>
       <h1>Information details</h1>
    {length > 0 && 
    
  <>
      <table>
          <thead>
          <tr>
              <th onClick={()=>sorting('username')}>name</th>
              <th>email</th>
              <th>number</th>
              <th>dob</th>
              <th>city</th>
              <th>country</th>
              <th>district</th>
              <th>province</th>
              <th></th>
              <th></th>
              
          </tr>
          </thead>
          <tbody>
              {datas.map((d )=>(
                  <tr key={d.id}>
                  <td>{d.name.username}</td>
                  <td>{d.name.email}</td>
                  <td>{d.name.number}</td>
                  <td>{d.name.DOB}</td>
                  <td>{d.name.city}</td>
                  <td>{d.name.country}</td>
                  <td>{d.name.district}</td>
                  <td>{d.name.province}</td>
                  <td className='icon' onClick={() => deleteEntry(d.id)}><DeleteIcon /></td>
                  <td className='icon' onClick={()=> editEntry(d.id)}><EditIcon /></td>
              </tr>

              ))}
              
              </tbody>
         
         </table>
         <Link to={{pathname: `/profile`, state: {datas}}}><button className='button2'>View Profiles</button></Link>
         </>
         }
  {length < 1 && <h3>no entries</h3>}

          
 
</div>

    
  )
}

export default Table