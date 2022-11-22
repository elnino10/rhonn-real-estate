import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
  
export const SidebarData = [
  {
    title: "About",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Properties",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Contact",
    path: "#contact",
    icon: <FaIcons.FaPhone />,
  },
];