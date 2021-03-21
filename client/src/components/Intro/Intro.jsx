import React from "react";

// * Style
import classes from "./style.module.css";

const Intro = () => {
  return (
    <React.Fragment>
      <div className={classes.Image}></div>
      <h1 className={classes.Header}>
        Covid-19
        <br /> Information and statistics
      </h1>
    </React.Fragment>
  );
};

export default Intro;
