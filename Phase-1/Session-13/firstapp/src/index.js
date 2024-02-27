import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Slider from './components/Slider';
import Featured from './components/Featured';
import Footer from './components/Footer';
import UseCase1 from './components/JSXLearning/UseCase1';
import UseCase2 from './components/JSXLearning/UseCase2';
import UseCase3 from './components/JSXLearning/UseCase3';
import UseCase4 from './components/JSXLearning/UseCase4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <App />
    <Header/>
    <Slider/>
    <Featured/>
    <UseCase1/>
    <UseCase2/>
    <UseCase3/>
    <UseCase4/>
    <Footer/>
  </div>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
