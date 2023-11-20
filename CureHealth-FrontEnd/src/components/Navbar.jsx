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
  "Vadodara",
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

  const handleStorage = () => {
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <div className='navbar-logo-div'>
          {" "}
          <img src='../logo.png' alt='logo' className='logo' />
        </div>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        {click ? <RxCross2 /> : <FaBars />}
      </div>
      <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className='nav-item'>
          <div className='flex'>
            <GrLocation />
            <select
              name='location'
              id='location'
              onChange={(e) => handleLoc(e.target.value)}
              className='text-black'
            >
              {cities.map((location, i) => (
                <option className='text-black' value={location} key={i}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </li> */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              onClick={closeMobileMenu}
              className='nav-links'
            >
              <div className='flex'>
                <div>Services</div> &nbsp;
                <div className='flex items-center'>{<AiFillCaretDown />}</div>
              </div>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'></li>
          {/* <li className='nav-item'>
          <Link
            to='/videoform'
            className='nav-links' onClick={handleStorage}>
            Video
          </Link>
        </li> */}
          <div className='flex place-items-center'>
            <li className='px-10'></li>
            {user ? (
              <Link to='/' className='nav-links' onClick={logoutUser}>
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to='/register'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
                <Link to='/login' className='nav-links'>
                  Login
                </Link>
              </>
            )}
            <li className='nav-item px-10'>
              <div id='google_translate_element'></div>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
