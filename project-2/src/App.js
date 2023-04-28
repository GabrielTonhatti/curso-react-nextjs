import { useState } from 'react';
import './App.css';
import PropsTypes from 'prop-types';

const Button = ({ incrementButton }) => <button onClick={() => incrementButton(10)}>+</button>;

Button.propTypes = {
  incrementButton: PropsTypes.func.isRequired,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => setCounter(counter + num);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C 1: {counter}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;
