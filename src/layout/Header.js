import React, { useState } from "react";
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
        <div className={classes.welcome}>{props.headerMsg}</div>
    </header>
  );
};

export default Header;
