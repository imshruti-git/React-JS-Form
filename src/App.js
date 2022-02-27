import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput';

function App() {

  const [username, setUsername] = useState('')
  

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log(username);
  }
  return (
    <div className="App">
      <h2>React Form</h2>
      <div className='box'>
          <form onSubmit={submitHandler}> 
              <FormInput placeholder='username' name='User name' setUsername={setUsername}/>
              <FormInput placeholder='email'name='Email'/>
              <FormInput placeholder='phone number' name='Phone Number:'/>
              <FormInput placeholder='DOB' name='Date of Birth'/>
              <button>submit</button>
            </form>
      </div>
        
    </div>
  );
}

export default App;
