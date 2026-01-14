import useCounter from "../../hooks/useCounter";
import CountButton from "./button/CountButton";
import CountValue from "./count/CountValue";
import styles from "./Counter.module.css";

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <div className={styles.counter}>
      <CountValue>{count}</CountValue>

      <div className={styles.countButtonWrapper}>
        <CountButton onClick={decrement} type="button">
          Decrement
        </CountButton>
        <CountButton onClick={increment} type="button">
          Increment
        </CountButton>
      </div>
    </div>
  );
};

export default Counter;
