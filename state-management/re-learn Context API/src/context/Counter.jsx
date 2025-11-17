import { createContext, useEffect, useState } from "react";

export const counterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};
