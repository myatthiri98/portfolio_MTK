import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { MdOutlineWork, MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the navigation menu when a link is clicked
  };

  return (
    <div>
      <HiMenu onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden" />
      {nav ? (
        <div className="fixed w-full h-screen bg-gray-200 bg-opacity-90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer 
          hover:scale-110 ease-in duration-200 "
          >
            <FaHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer 
          hover:scale-110 ease-in duration-200 "
          >
            <MdOutlineWork size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer 
          hover:scale-110 ease-in duration-200 "
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer 
          hover:scale-110 ease-in duration-200 "
          >
            <BsFillPersonFill size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"  // Added "#" symbol here
            onClick={handleLinkClick}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer 
          hover:scale-110 ease-in duration-200 "
          >
            <MdContactMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineWork size={22} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsFillPersonFill size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdContactMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
