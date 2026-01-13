import useCounter from "../../hooks/useCounter";
import CountButton from "../button/CountButton";

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <CountButton onClick={decrement} type="button">
        Decrement
      </CountButton>
      <p>{count}</p>
      <CountButton onClick={increment} type="button">
        Increment
      </CountButton>
    </>
  );
};

export default Counter;
