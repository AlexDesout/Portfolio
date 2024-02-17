import logo from './logo.svg';
import './App.css';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Presentation />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
