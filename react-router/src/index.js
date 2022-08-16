import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./route/main"
import Contact from "./route/contact"
import People from "./route/people"
import Number from './route/number'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}>
      <Route path='main' element={<Main />}>
      <Route path=':peopleName' element={<People/>}/>
      </Route>
      <Route path="contact" element={<Contact/>}>
        <Route path=':contactNum' element={<Number/>}/>
      </Route>
      </Route>

    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
