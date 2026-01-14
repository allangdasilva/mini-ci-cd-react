import React from "react";
import styles from "./CountValue.module.css";

interface ICountValue extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CountValue = (props: ICountValue) => {
  return (
    <span className={styles.countValue} {...props}>
      {props.children}
    </span>
  );
};

export default CountValue;
