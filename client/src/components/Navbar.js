import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../data/SidebarData";
import SubMenu from "./SubMenu";

import rhonn from "../assets/images/rhonn-logo.png";

import classes from "./Navbar.module.css";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #67968e;
  width: 200px;
  height: 45vh;
  margin-top: 5rem;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 500ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav>
      <div
        className={
          props.onScroll || sidebar
            ? `${classes.navbar} ${classes["scroll-header"]}`
            : classes.navbar
        }
      >
        <div className={classes.logo}>
          <Link to="/">
            <img src={rhonn} alt="Rhonn" />
            <h3>Rhonn Real Estate</h3>
          </Link>
        </div>
        <div className={classes["nav-links"]}>
          <ul>
            <li>
              <NavLink
                to="/about-us"
                className={({isActive}) => (isActive ? classes.active : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({isActive}) => (isActive ? classes.active : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <a href="/properties_on-listing">On Listing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className={classes["nav-toggler"]} onClick={showSidebar}>
            <span className={classes["top-bar"]}></span>
            <span className={classes["middle-bar"]}></span>
            <span className={classes["bottom-bar"]}></span>
            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <AiIcons.AiOutlineClose
                    style={{ color: "white", fontSize: "1rem" }}
                    onClick={showSidebar}
                  />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
