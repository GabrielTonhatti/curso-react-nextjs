import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((prevReverse) => !prevReverse);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>
        <p>
          <button onClick={handleClick} type="button">
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button onClick={handleIncrement} type="button">
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
