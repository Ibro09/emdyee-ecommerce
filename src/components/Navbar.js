import React from "react";
import logo from "../images/logo.svg";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  // const displaySubmenu = e => {
  //   const page = e.target.textContent;
  //   const tempBtn = e.target.getBoundingClientRect();
  //   const center = (tempBtn.left + tempBtn.right) / 2;
  //   const bottom = tempBtn.bottom - 3;
  //   openSubmenu(page, { center, bottom });
  // };
  // const handleSubmenu = e => {
  //   if (!e.target.classList.contains("link-btn")) {
  //     closeSubmenu();
  //   }
  // };
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='/'>
            <img src={logo} className='nav-logo' alt='' />
          </a>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>
              <a href='/'>Home</a>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <a href='/about'>About</a>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <a href='/contact'>Contact</a>
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>
          <FaCartPlus /> {""}
          <a href='/products'>shop</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
