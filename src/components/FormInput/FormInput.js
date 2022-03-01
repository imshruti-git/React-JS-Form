import React, { useState } from 'react'
import './forminput.css';


const FormInput = (props) => {

  const [focused, setFocused ] =useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;
 
  const handleFocus = (e) => {
    setFocused(true);
  };


  return (
    <div className='form-input'>
       
            <label >{label}</label>
            {id===8 ? 
            <select {...inputProps} onChange={onChange}>
              <option disabled value=''>select your province</option>
              <option value='province 1'>Province 1</option>
              <option value='province 2'>Province 2</option>
              <option value='province 3'>Province 3</option>
              <option value='province 4'>Province 4</option>
              <option value='province 5'>Province 5</option>
              <option value='province 6'>Province 6</option>
            </select> :
             <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}></input> }
           
            <span>{errorMessage}</span>
        
    </div>
  )
}

export default FormInput