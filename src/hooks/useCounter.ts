import React from "react";

const useCounter = (initialState: number) => {
  const [count, setCount] = React.useState(initialState);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }

  return { count, increment, decrement };
};

export default useCounter;
