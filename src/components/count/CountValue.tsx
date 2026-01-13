import React from "react";

interface ICountValue extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CountValue = (props: ICountValue) => {
  return <p {...props}>{props.children}</p>;
};

export default CountValue;
