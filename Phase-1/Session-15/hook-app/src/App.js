import logo from './logo.svg';
import './App.css';
import UseEffectDemo from './componenet/UseEffectDemo';
import Timer from './componenet/Timer';
import RealTimeClock from './componenet/RealTimeClock';
import Demo from './componenet/Demo';
import UserCaseInputValidation from './componenet/UserCaseInputValidation';

function App() {
  return (
    <div>
      <h1>Welcome to useEffect Demo</h1>
      <UseEffectDemo/>
      <Timer/>
      <RealTimeClock/>
      <Demo/>
      <UserCaseInputValidation/>
    </div>
  );
}

export default App;
