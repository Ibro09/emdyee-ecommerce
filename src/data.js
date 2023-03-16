import { FaCreditCard, FaBook, FaBriefcase, FaHouseUser, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: "Home",
    links: [
      { label: "home", icon: <FaHouseUser />, url: "/" },
    ],
  },
  {
    page: "About",
    links: [
      { label: "About", icon: <FaBriefcase />, url: "/about" },
     ],
  },
  {
    page: "Contact",
    links: [
      { label: "contact us", icon: <FaPhoneAlt />, url: "/contact" },
    ],
  },
  {
    page: "Shop",
    links: [
      { label: "view shop", icon: <FaBriefcase />, url: "/products" },
      ],
  },
  {
    page: "cart",
    links: [
      { label: "cart", icon: <FaBriefcase />, url: "/products" },
     ],
  },
];

export default sublinks;
