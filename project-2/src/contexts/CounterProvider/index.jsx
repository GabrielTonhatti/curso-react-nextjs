import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { CounterContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return <CounterContext.Provider value={{ counterState, counterDispatch }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterProvider;
