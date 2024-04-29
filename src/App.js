import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Compounts/Home";
import Doctor from "./Link/Doctor";
import Employee from "./Link/Employee";
import Medical_Camp from "./Link/Medical_Camp";
import Patient from "./Link/Patient";
import Viewdoctor from "./Link/Viewdoctor";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Viewpatient from "./Link/Viewpatient";
import Viewcamp from "./Link/Viewcamp";
import Viewemp from "./Link/Viewemp";
import Message from "./Link/Message";
import Appointment from "./Link/Appointment";
import Header from "./Compounts/Header";
import data from "./data.json";
import Login from "./Login";
function App() {
  useEffect(() => {
    document.title = "HMS-APS Infotech";

    // Change the favicon href
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "./icon3.png";
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    const user = data.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Home onLogout={handleLogout} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            {/* <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/Patient" element={<Patient />} />
            <Route path="/Viewpatient" element={<Viewpatient />} />

            <Route path="/Medical_Camp" element={<Medical_Camp />} />
            <Route path="/Viewcamp" element={<Viewcamp />} />

            <Route path="/Employee" element={<Employee />} />
            <Route path="/Viewemp" element={<Viewemp />} />

            <Route path="/Doctor" element={<Doctor />} />
            <Route path="/Viewdoctor" element={<Viewdoctor />} />

            <Route path="/Message" element={<Message />} />

            <Route path="/Appointment" element={<Appointment />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
