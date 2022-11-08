import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
  
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  list-style: none;
  height: 1.5rem;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    background: #252831;
    border-left: 4px solid green;
    cursor: pointer;
  }
`;
  
const SidebarLabel = styled.span`
  margin-left: 1rem;
`;
  
const DropdownLink = styled(Link)`
  background: #252831;
  height: 1.5rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1rem;
  
  &:hover {
    background: green;
    cursor: pointer;
  }
`;
  
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <SidebarLink to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
  
export default SubMenu;