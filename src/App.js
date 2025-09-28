import './App.css';
import React from "react";
import { useCounter } from "./context/CounterContext";
import CounterDisplay from "./CounterDisplay";

const App = () => {
  const { increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter App with Context</h1>
      <CounterDisplay />
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;