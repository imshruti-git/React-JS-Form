
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />
          </Routes>
         
                  
        </div>
    </Router>
        
    
  );
}

export default App;
