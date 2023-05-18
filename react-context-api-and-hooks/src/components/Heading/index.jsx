import React from 'react';
import PropTypes from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

const Heading = () => {
  const [state] = useCounterContext();

  return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>;
};

export default Heading;
