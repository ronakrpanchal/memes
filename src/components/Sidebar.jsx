import React from "react";
// import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { Avatar } from "@mui/material";
const Sidebar = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Home",
      name: "home",
    },
    {
      path: "/Meme1",
      name: "meme1",
    },
    {
      path: "/Meme2",
      name: "meme2",
    },
    {
      path: "/Meme3",
      name: "meme3",
    },
  ];
  return (
    <div className="container">
      <div  className="sidebar">
        <div className="top_section">
          <h1  className="logo">
            <Avatar alt="logo"/>
          </h1>
          {/* <div  className="bars">
            <FaBars  />
          </div> */}
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div
              
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
