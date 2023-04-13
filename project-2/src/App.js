import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate = executa toda vez que o componente é atualizado
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount = executa uma única vez quando o componente é montado
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    console.log('componentDidMount');

    // componentWillUnmount =  (limpeza) executa quando o componente é desmontado
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência = executa toda vez que a dependência é mudar
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>
        C 1: {counter} C 2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
