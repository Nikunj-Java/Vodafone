import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import PropsCase from './conponent/PropsCase';



function App() {
  return (
   <div className='container bg-danger text-center text-warning'>

    <h1>Welcome To Hook Examples</h1>
    
    <PropsCase message="Nikunj Soni" />
    
    <PropsCase message="Alex"/>

    <PropsCase message="Charlie"/>
   </div>
  );
}

export default App;
