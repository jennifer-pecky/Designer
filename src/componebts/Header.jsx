import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/header.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState('');

  const openMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
  }, []);

  const stickyHeader = () => {
    const winScroll = window.scrollY;
    const stickHeader =
      winScroll >= 250
        ? 'fixed bg-black w-full transition duration-200'
        : 'absolute bg-transparent w-full';
    setSticky(stickHeader);
    console.log(winScroll);
  };

  return (
    <div
      className={`header flex justify-center items-center h-[10vh] z-10 text-white ${sticky}`}
    >
      <div className="w-[90vw] flex justify-between items-center">
        <img src={logo} alt="logo" className="w-24 h-10" />
        <nav
          className={
            menu === false
              ? 'h-[0vh]'
              : `absolute w-[90vw] bg-[#212529] md:bg-transparent grid justify-items-center top-[10vh] md:top-0 md:relative md:h-[10vh] md:flex md:items-center md:w-[60vw]`
          }
        >
          <NavLink
            to="/"
            className="w-full hover:text-[#ff565b] border-b-[1px] border-gray-700 md:border-none md:w-[20%] text-center h-[7vh] transition duration-500 ease-in grid content-center"
          >
            Homepage
          </NavLink>
          <NavLink
            to="/about"
            className="w-full hover:text-[#ff565b] border-b-[1px] border-gray-700 md:border-none md:w-[20%] text-center h-[7vh] transition duration-500 ease-in grid content-center"
          >
            About Us
          </NavLink>
          <NavLink
            to="/explore"
            className="w-full hover:text-[#ff565b] border-b-[1px] border-gray-700 md:border-none md:w-[20%] text-center h-[7vh] transition duration-500 ease-in grid content-center"
          >
            Explore Work
          </NavLink>
          <NavLink
            to="/trending"
            className="w-full hover:text-[#ff565b] border-b-[1px] border-gray-700 md:border-none md:w-[20%] text-center h-[7vh] transition duration-500 ease-in grid content-center"
          >
            Trending
          </NavLink>
          <NavLink
            to="contact"
            className="w-full hover:text-[#ff565b] md:w-[20%] text-center h-[7vh] transition duration-500 ease-in grid content-center"
          >
            Contact Us
          </NavLink>
        </nav>
        <div className="md:hidden" onClick={openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
