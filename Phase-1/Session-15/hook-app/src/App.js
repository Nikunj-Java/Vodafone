import logo from './logo.svg';
import './App.css';
import UseEffectDemo from './componenet/UseEffectDemo';
import Timer from './componenet/Timer';
import RealTimeClock from './componenet/RealTimeClock';
import Demo from './componenet/Demo';
import UserCaseInputValidation from './componenet/UserCaseInputValidation';
import SubmissionTimer from './componenet/SubmissionTimer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div>
      <h1>Welcome to useEffect Demo</h1>
      <UseEffectDemo/>
      <Timer/>
      <RealTimeClock/>
      <Demo/>
      <UserCaseInputValidation/>
      <SubmissionTimer submissionDate="2024-02-29T23:59:59"/>
    </div>
  );
}

export default App;
