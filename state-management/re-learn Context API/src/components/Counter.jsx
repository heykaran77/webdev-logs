import { useContext } from "react";
import { counterContext } from "../context/Counter";

const Counter = () => {
  const { setCount } = useContext(counterContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
