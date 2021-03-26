import React from "react";

// * Style
import classes from "./style.module.css";
const Footer = () => (
  <footer className={classes.Container}>
    <h1>Want to learn more?</h1>
    <a
      target="_blank"
      href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
    >
      Coronavirus - WHO | World Health Organization
    </a>
  </footer>
);

export default Footer;
