import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropsCase from './conponent/PropsCase';
import UseStateCase from './conponent/UseStateCase';
import UseStateCase2 from './conponent/UseStateCase2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <App />

    <UseStateCase/>

    <UseStateCase2/>
    
    
  </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
