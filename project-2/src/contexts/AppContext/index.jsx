import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);

  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>;
};
