import React, { useContext } from "react";
import Counter from "./components/Counter";
import { counterContext } from "./context/Counter";

const App = () => {
  const { count } = useContext(counterContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0c0c0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}>
      <h1>Count: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
