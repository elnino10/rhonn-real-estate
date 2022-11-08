import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


import classes from "./Header.module.css";



const Header = (props) => {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={classes.header}>
      <Navbar onScroll={scroll} />
      <div className={classes.welcome}>
        <div className={classes["welcome-header"]}>
          <h1>RHONN REAL ESTATE</h1>
          <h4>lorem ipsum</h4>
        </div>
        <div className={classes["welcome-buttons"]}>
          <div className={classes["welcome-button"]}>
            <Link to="#">lorem</Link>
          </div>
          <div className={classes["welcome-button"]}>
            <Link to="#">lorem</Link>
          </div>
          <div className={classes["welcome-button"]}>
            <Link to="#">lorem</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
