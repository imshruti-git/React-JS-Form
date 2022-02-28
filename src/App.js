import { useState, useEffect } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput';
import Table from './components/Table';

function App() {

  //main array of object states
  const [data, setData] = useState([]);


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

  const inputs = [
    {
      id:1,
      name:'username',
      label:'User name',
      placeholder:'username',
      errorMessage:'name an be 20 characters long and should not contain any special characters.',
      type:'text',
      required: true,
    },
    {
      id:2,
      name:'email',
      label:'Email',
      placeholder:'email',
      type:'email',
      errorMessage:'It should be a valid email.',
      required: true,
    },
    {
      id:3,
      name:'number',
      label:'Phone Number',
      placeholder:'int:1234',
      type:'text',
      errorMessage:'7 characters long integer',
      required: true,
    },
    {
      id:4,
      name:'DOB',
      label:'DOB',
      placeholder:'DOB',
      type:'date',
      required: true,
    },
    {
      id:5,
      name:'city',
      label:'city',
      placeholder:'city',
      type:'text',
      required: true,
    },
    {
      id:6,
      name:'district',
      label:'district',
      placeholder:'district',
      type:'text',
      required: true,
    },
    {
      id:7,
      name:'country',
      label:'country',
      type:'text',
      required: true,
    },
    {
      id:8,
      name:'province',
      label:'province',
      placeholder:'province',
      type: 'text',
      required: true,
    }
  ]
  
//form submit event

  const submitHandler = (e) =>{
    e.preventDefault();
    

    setData([...data, values]);

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

  

  const onChange= (e) =>{
    setValues({...values, [e.target.name]:e.target.value });
  };

  
  
  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data));
  },[data])

  return (
    <div className="App">
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
            
              
              <button>submit</button>
            </form>
            </div>
          
      
        <Table length={data.length}/>
    </div>
  );
}

export default App;
