import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/useCase-4/ThemeContext';

import ThemedComponent from './components/useCase-4/ThemedComponent';

function App() {
  return (
    <div>
      <h1>useContext API</h1>
      <ThemeProvider>
       <ThemedComponent/>
      </ThemeProvider>
    
      
    </div>
  );
}

export default App;
