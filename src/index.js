import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gstregis_form from './Gstregis_form';
import Multipleinputs from './login/Multipleinputs';
import Signup from './signup/SignUp';
import Gst_filing from './gst filling/Gst_filing';
import Services from './Services';
import Compilance from './Compilance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route  path="/" element={<App/>}></Route>
    <Route path='/gst_registration' element={<Gstregis_form/>}></Route>
    <Route path="/login" element={<Multipleinputs/>}></Route>
    <Route path="/createAccount" element={<Signup/>}></Route>
    <Route path="/gst_filling" element={<Gst_filing/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/compilance" element={<Compilance/>}></Route>
    
  </Routes>
 </BrowserRouter>
);


