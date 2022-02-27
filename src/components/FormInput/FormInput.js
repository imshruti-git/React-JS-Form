import React from 'react'
import './forminput.css';


const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
 
  
  return (
    <div className='form-input'>
       
            <label >{label}</label>
            {id===8 ? 
            <select className='dropdown'>
              <option value='province1'>Province 1</option>
              <option value='province2'>Province 2</option>
              <option value='province3'>Province 3</option>
              <option value='province4'>Province 4</option>
              <option value='province5'>Province 5</option>
              <option value='province6'>Province 6</option>
            </select> :
             <input {...inputProps} onChange={onChange}></input> }
           
            <span>{errorMessage}</span>
        
    </div>
  )
}

export default FormInput