import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import AgeCounter from './component/AgeCounter';
import SimpleForm from './component/SimpleForm';
import Whether from './component/Whether';

function App() {
  return (
    <div>
      <Counter/>
      <AgeCounter/>
      <SimpleForm/>
      <Whether/>
    </div>
  );
}

export default App;
