/** @format */

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
// import { useGlobalContext } from "../context";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";

export const Navbar = () => {

  return (
    <nav>
      <ul className='list-none flex flex-wrap justify-evenly items-center bg-slate-200 h-18 text-xl '>
        <li className='px-10'>
          <Link to='/'>
            <button className='text-xl'><GrLocation /></button>
          </Link>
        </li>
        <li className='px-10'>
          <Link to='/cart'>Rent</Link>
        </li>
        {/* <li><Search /></li> */}
        <li className='px-10'>
          <Link to='/'>
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className='px-10'>
          <Link to='/'>Logout</Link>: <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
