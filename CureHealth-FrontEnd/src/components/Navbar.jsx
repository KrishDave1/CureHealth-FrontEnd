/** @format */

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul className='list-none flex flex-wrap justify-evenly items-center bg-white h-18 text-xl '>
        <div>
          <li className='px-10'>
            <Link to='/'>Curehealth</Link>
          </li>
        </div>
        <div className='flex'>
          <li className='px-10'>
            <Link to='/'>
              <button className='text-xl'>
                <GrLocation />
              </button>
            </Link>
          </li>
          <li className='px-10'>
            <Link to='/'>About Us</Link>
          </li>
          <li className='px-10'>
            <Link to='/cart'>Rent</Link>
          </li>
          <li className='px-10'>
            <Link to='/'>
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </div>
        <div className="flex">
          <li className='px-10'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='px-10'>
            <Link to='http://127.0.0.1:8000/'>video</Link>
          </li>
        </div>
      </ul>
      <div className='flex justify-center items-center my-3'>
        <hr className='w-11/12 h-0.5 bg-orange-300 rounded-xl'></hr>
      </div>
    </nav>
  );
};
