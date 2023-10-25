/** @format */

import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const Hello = "Hello World!";
  const hi = "hi";

  return (
    <AppContext.Provider value={ { Hello, hi } }>
      { children }
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
