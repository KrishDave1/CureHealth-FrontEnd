/** @format */

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
// import Dropdown from "./Dropdown";
import "./navbar.css";
import { useGlobalContext } from "../context";

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
  const { contextData } = useGlobalContext();
  let user = contextData.user;
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
        <div className='flex'>
          <li className='px-10'></li>
          {user ? <p>Logout</p> : <Link to='/login'>Login</Link>}
          {user && <p>Hello {user.username}</p>}
          {/* <li className='px-10'>
            <Link to='http://127.0.0.1:8000/'>video</Link>
          </li> */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;