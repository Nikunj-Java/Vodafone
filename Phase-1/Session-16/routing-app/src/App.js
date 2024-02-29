import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Aboutus from './component/Aboutus';
import Home from './component/Home';
import Contactus from './component/Contactus';
import UniversityList from './component/UniversityList';
import UnList from './component/UnList';
 
function App() {
  return (
    <BrowserRouter>
           <Navigation/>
            
           <Routes>
            <Route path='/' element={<Navigate to="/home" replace/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<Aboutus/>}></Route>
            <Route path='/contact' element={<Contactus/>}></Route>
            <Route path='/list' element={<UniversityList/>}></Route>
            <Route path='/unlist' element={<UnList/>}></Route>
           </Routes>
    </BrowserRouter>
  );
}

export default App;
