
import React, { useState } from 'react'
import './table.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Table = ({ datas, setDatas, length, deleteEntry }) => {

    const navigate = useNavigate();
    const clickHandler = (e) =>{
        navigate("/profile", {state: {datas}});
    };
    
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
              <th><ArrowDropDownIcon onClick={()=>sorting('username')}/> name</th>
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
                  <td className='icon' onClick={() => deleteEntry(d.number)}><DeleteIcon /></td>
                  <td className='icon' ><EditIcon /></td>
              </tr>

              ))}
              
              </tbody>
         
         </table>
         <button onClick={clickHandler} className='button2'>View Profiles</button>
         </>
         }
  {length < 1 && <h3>no entries</h3>}

          
 
</div>


    
  )
}

export default Table