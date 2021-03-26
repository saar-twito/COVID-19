import React from "react";

// * Style
import classes from "./style.module.css";

const Header = () => (
  <header>
    <div className={classes.Image}></div>
    <h1 className={classes.Header}>
      Covid-19
      <br /> Information and statistics
    </h1>
  </header>
);

export default Header;
