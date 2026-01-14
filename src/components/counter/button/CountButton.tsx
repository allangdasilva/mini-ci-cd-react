import React from "react";
import styles from "./CountButton.module.css";

interface ICountButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CountButton = (props: ICountButton) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

export default CountButton;
