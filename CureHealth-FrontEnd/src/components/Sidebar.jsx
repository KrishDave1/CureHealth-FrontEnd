import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { BsCalendar } from "react-icons/bs";
import { IoIosPhotos } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const routes = [
    {
      path: "/myaccount",
      name: "My account",
      icon: <BsFillPersonFill />,
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      icon: <LuMessageSquare />,
    },
    {
      path: "/appointments",
      name: "Appointments",
      icon: <BsCalendar />,
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      icon: <IoIosPhotos />,
    }
  ];
  return (
    // <div className="flex flex-col h-screen">
    // <div className="main-container">
    <>
      <motion.div
        animate={{
          width: isOpen ? "230px" : "170px",

          transition: {
            duration: 0.5,
            // type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar h-screen`}
      >
        <div className='top_section'>
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='logo cursor-pointer'
                onClick={() => navigate("/dashboard")}
              >
                CureHealth
              </motion.h1>
            )}
          </AnimatePresence>

          <div className='bars'>
            <FaBars onClick={toggle} className='cursor-pointer' />
          </div>
        </div>

        <section className='routes'>
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              <div className='flex p-2'>
                <div className='icon p-1'>{route.icon}</div>
                <div className='link_text'>{route.name}</div>
              </div>
            </NavLink>
          ))}
          <div id='google_translate_element'></div>
        </section>
      </motion.div>
    </>
    // </div>
    // </div>
  );
};

export default Sidebar;
