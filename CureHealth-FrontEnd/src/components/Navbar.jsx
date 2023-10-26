/** @format */

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
// import { useGlobalContext } from "../context";
import { GrLocation } from "react-icons/gr";
// import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import "./navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="logo.png" alt="logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <RxCross2 /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/location" className="nav-links">
            <GrLocation />
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/services" onClick={closeMobileMenu} className="nav-links">
            <div className="flex">
              <div>Services</div> {<AiFillCaretDown />}
            </div>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        {/* <li><Search /></li> */}
        <li className="nav-item">
          <Link
            to="/contact-us"
            onClick={closeMobileMenu}
            className="nav-links"
          >
            Contact Us
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-links">
            Logout
          </Link>

          <Link to="/login" className="nav-links">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
