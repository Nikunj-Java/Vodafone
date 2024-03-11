import logo from './logo.svg';
import './App.css';
import GrandParent from './components/usecase-2/GrandParent';
import Userinfo from './components/usecase-3/Userinfo';
import { AuthProvide } from './components/usecase-3/AuthContext';

function App() {
  return (
    <div>
      <h1>useContext API</h1>
    
      <AuthProvide>
        <h3>Authentication App</h3>
        <Userinfo/>
      </AuthProvide>

    </div>
  );
}

export default App;
