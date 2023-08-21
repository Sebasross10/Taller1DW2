import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export const useCount = () => {
  return useContext(CountContext);
};

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CountContext.Provider>
  );
};
