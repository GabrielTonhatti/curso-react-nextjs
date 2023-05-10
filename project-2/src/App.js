import { memo, useCallback, useState } from 'react';
import './App.css';
import PropsTypes from 'prop-types';

const Button = memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou!');

  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: PropsTypes.func.isRequired,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => setCounter((prevCounter) => prevCounter + num), []);

  console.log('Pai, renderizou!');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C 1: {counter}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;
