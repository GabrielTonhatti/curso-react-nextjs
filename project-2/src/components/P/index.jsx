import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
const P = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const { state, setState } = theContext;
  const { body, counter } = state;

  return <p onClick={() => setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }))}>{body}</p>;
};

export default P;
