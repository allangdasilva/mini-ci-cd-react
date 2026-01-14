import React from "react";
import styles from "./Title.module.css";

interface Ititle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
const Title = (props: Ititle) => {
  return <h1 className={styles.title}>{props.children}</h1>;
};

export default Title;
