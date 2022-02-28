import React, { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput';
import Table from '../Table/Table';
import {inputs} from '../../data';
import './home.css';


//getting the values of local storage
const getDatafromLS=()=>{
    const data = localStorage.getItem('datas');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  };


const Home = () => {

    //main array of object states
  const [datas, setDatas] = useState(getDatafromLS());


  //input field states
  const [values, setValues] = useState({
    username:'',
    email:'',
    number:'',
    DOB:'',
    city:'',
    district:'',
    country:'Nepal',
    province :''
  });


  //for sorting
  
  
//form submit event

  const submitHandler = (e) =>{
    e.preventDefault();
    
    const allInputdata = { id: new Date().getTime().toString(), name:values }
    setDatas([...datas, allInputdata]);

    setValues({  
      username:'',
      email:'',
      number:'',
      DOB:'',
      city:'',
      district:'',
      country:'Nepal',
      province :''
    });

    
  };

  console.log(datas);

  const onChange= (e) =>{
    setValues({...values, [e.target.name]:e.target.value });
  };

  //deleting entry
  const deleteEntry=(id)=>{
    const filteredvalue=datas.filter((element, index)=>{
      return element.id !== id
    })
    setDatas(filteredvalue);
  }
  

  //Editing Entry
  const editEntry=(id)=>{
      const findValue= datas.find((element)=>{
          if(element.id===id) {
              return{
                  ...values,
              }
          }
      });
      console.log(findValue);
      
  }
  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('datas', JSON.stringify(datas));
  },[datas])

  return (
    <div className='container'>
        <h2>React form</h2>
                  <div className='wrapper'>
                    <form onSubmit={submitHandler}> 
                       <div className='box'>
                            {inputs.map((input) =>(  
                              <FormInput 
                                  key={input.id} 
                                  {...input} 
                                 value={values[input.name]} 
                                  onChange={onChange}
                             />
                            ))}
                        </div>           
                      <button className='button1'>submit</button>
                    </form>
                 </div>
          
      
        <Table datas={datas} setDatas={setDatas} length={datas.length} deleteEntry={deleteEntry} editEntry={editEntry}/>
    </div>
  )
}

export default Home