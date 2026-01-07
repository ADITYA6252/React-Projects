import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  return (
    <div className={styles.box}>
    <div className={styles.calculator}>
    <Display /> 
    <ButtonsContainer />
    </div>
    </div>
  );
};

export default App;
