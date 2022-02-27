import React from 'react'
import './forminput.css';


const FormInput = (props) => {

 
  
  return (
    <div className='form-input'>
        
            <label >{props.name}</label>
            <input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)}></input>
            
        
    </div>
  )
}

export default FormInput