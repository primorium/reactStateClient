import React from "react";
import { useCounter } from "./context/CounterContext";

const CounterDisplay = () => {
  const { count } = useCounter();
  return <h2>Current Count: {count}</h2>;
};

export default CounterDisplay;