import './App.css'
import React, { useEffect,useState } from 'react';
import Home from './Compounts/Home';
import Doctor from './Link/Doctor';
import Employee from './Link/Employee';
import Medical_Camp from './Link/Medical_Camp';
import Patient from './Link/Patient';
import Viewdoctor from './Link/Viewdoctor';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Viewpatient from './Link/Viewpatient';
import Viewcamp from './Link/Viewcamp';
import Viewemp from './Link/Viewemp';
import Message from './Link/Message';
import Appointment from './Link/Appointment';
import Header from './Compounts/Header';
import data from './data.json'
import Login from './Login'
function App() {
  useEffect(() => {
    document.title = "HMS-APS Infotech";
    
    // Change the favicon href
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = './logo4.png';
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    const user = data.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
  };

  return (
    <>
      <Router>
    <div className='App'>
       
       <Header/>
      <Routes>
      {/* <Route
              path="/"
              element={
                isAdminLoggedIn ? (
                  <Navigate to="/admin" />
                ) : isLoggedIn ? (
                  <Home onLogout={handleLogout} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/login" element={<Login onAdminLogin={handleLogin} />} /> */}
      
        <Route path='/' element={ <Home/>}/>
     
        <Route path='/Patient' element={<Patient />} />
        <Route path='/Viewpatient' element={<Viewpatient />}/>

        <Route path='/Medical_Camp' element={<Medical_Camp/>}/>
        <Route path='/Viewcamp' element={<Viewcamp/>}/>

        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/Viewemp' element={<Viewemp/>}/>

        <Route path='/Doctor' element={<Doctor/>}/>
        <Route path='/Viewdoctor' element={<Viewdoctor/>}/>

        <Route path='/Message' element={<Message/>}/>

        <Route path='/Appointment' element={<Appointment/>}/>

       
      </Routes>
     
       
    </div>
    
    </Router>
    </>
    
  
    
  );
}

export default App;
