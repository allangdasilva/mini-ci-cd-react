import React from "react";

interface ICountButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CountButton = (props: ICountButton) => {
  return <button {...props}>{props.children}</button>;
};

export default CountButton;
