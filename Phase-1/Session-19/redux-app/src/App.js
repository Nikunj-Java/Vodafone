
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Counter from './component/Counter'
import { Cart } from './component/Cart';
import { UserData } from './component/UserData';
import { Testdata } from './component/TestData';
  
function App() {
  return (
    <div className='App'>
     <Counter/>
     <Cart/>
     <UserData/>
     <Testdata/>
     
    </div>
  );
}

export default App;
