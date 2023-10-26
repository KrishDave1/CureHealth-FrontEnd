/** @format */
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import Dropdown from "./Dropdown";
import "./navbar.css";
import { useGlobalContext } from "../context";

const cities = [
  "Gurgaon",
  "Kolkata",
  "Mumbai",
  "Pune",
  "Delhi",
  "Banglore",
  "Chennai",
  "Ahemdabad",
  "Hyderabad",
  "Vadodra",
];

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [location, setLocation] = useState("Gurgaon");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function handleLoc(e) {
    setLocation(e.target.value);
  }

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
  let logoutUser = contextData.logoutUser;
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
          <div className="flex">
            <GrLocation />
            <select
              name="location"
              id="location"
              onChange={(e) => handleLoc(e.target.value)}
              className="text-black"
            >
              {cities.map((location, i) => (
                <option className="text-black" value={location} key={i}>
                  {location}
                </option>
              ))}
            </select>
          </div>
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
        <li className="nav-item">
          <Link
            to="/contact-us"
            onClick={closeMobileMenu}
            className="nav-links"
          >
            Contact Us
          </Link>
        </li>
        <div className="flex place-items-center">
          <li className="px-10"></li>
          {user ? (
            <Link to="/" className="nav-links" onClick={logoutUser}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-links">
              Login
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
