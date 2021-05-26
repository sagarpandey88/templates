import React from "react";
import ReactDom from "react-dom";
import styles from "./index.module.scss";

const element = <div className={styles.helloWorld}>Hello Wo1rld Again!</div>;

ReactDom.render(element, document.getElementById("root"));
