/* eslint-disable react/prop-types */

import React from "react";
import "./navbar.css";
import { ArrowDropDown } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {


  const name = useSelector(state => state.user.userInfo.name);
  
  console.log("navbar rerendered");
  
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Riese App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;