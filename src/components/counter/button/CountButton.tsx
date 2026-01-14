import React from "react";
import styles from "./CountButton.module.css";

interface ICountButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  children: React.ReactNode;
}

const CountButton = (props: ICountButton) => {
  const buttonClasses = `${styles.button} ${styles[props.variant]}`;

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default CountButton;
