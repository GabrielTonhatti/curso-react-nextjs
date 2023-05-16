import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
const H1 = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = theContext;
  console.log(theContext);
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

export default H1;
