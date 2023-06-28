import './App.css';
import React from 'react';
import Login from "./Pages/Login";
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Sell from './Pages/Sell';
import OtpVerification from './Pages/OtpVerification';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="sell" element={<Sell />} />
          <Route path="sell/verifydetails" element={<OtpVerification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
