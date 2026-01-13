import useCounter from "../../hooks/useCounter";
import CountButton from "../button/CountButton";
import CountValue from "../count/CountValue";

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <CountButton onClick={decrement} type="button">
        Decrement
      </CountButton>

      <CountValue>{count}</CountValue>

      <CountButton onClick={increment} type="button">
        Increment
      </CountButton>
    </>
  );
};

export default Counter;
