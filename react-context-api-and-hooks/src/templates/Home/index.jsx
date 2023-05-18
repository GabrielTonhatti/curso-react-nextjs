import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((resolve) => console.log(resolve))
      .catch((error) => console.log(error.name, ':', error.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Error
        </Button>
      </div>
    </div>
  );
};
