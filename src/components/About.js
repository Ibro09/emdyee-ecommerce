import React, { useState } from "react";
import SharedLayout from "./SharedLayout";
import img from "../images/firstshoe.svg";
import news from "../images/new.svg";
import '../css/about.css'
import {FaCartPlus} from 'react-icons/fa'
const About = () => {
   const [openFooter, setOpenFooter] = useState(false);
   const [firstFooter, setFirstFooter] = useState(false);
   const [thirdFooter, setThirdFooter] = useState(false);
  return (
    <>
      <div id='about'>
        <h2 className='italics'>About us</h2>
        <p className='heading'>
          Home<span>//About</span>
        </p>
        <div className='smart-life'>
          <div className='smart-life-img'>
            <img src={img} alt='' />
          </div>
          <div className='smart-life-txt'>
            <p className='large'>Smart Life</p>
            <h2>With Smart Shoes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minivel quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata non proident,
              sunt in culpa qui officia.
            </p>
            <button className='btn'>
              <a href='/contact'> contact us</a>
            </button>
          </div>
        </div>
        <div className='new'>
          <div className='new-txt'>
            <p className='large'>saving 50% off shipping</p>
            <h2>All Online Store</h2>
            <p>OFFER AVAILABLE ALL SHOES & PRODUCTS</p>
            <button className='btn'>
              <a href='/contact'>
                <FaCartPlus /> shop
              </a>
            </button>
          </div>
          <div className='new-img'>
            <img src={news} alt='' className='new' />
            <h1 className='up'>New</h1>
            <h1 className='down'>New</h1>
          </div>
        </div>
        <div className='faq'>
          <h3>Frequently Asked Questions</h3>
          <div className='faqs'>
            <div
              className='faqs-heading'
              onClick={() => {
                setOpenFooter(!openFooter);
              }}>
              <h6>what shipping method are available</h6>
              <span>{!openFooter ? "+" : "-"}</span>
            </div>
            <div className={openFooter ? "faqs-txt" : "faqs-txt displaynot"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laborum deserunt voluptatibus maxime, perferendis vel ut ex
              similique quaerat, a repellat saepe vitae. Voluptatibus sed
              voluptas dolorum, animi debitis consequuntur!
            </div>
          </div>
          <div className='faqs'>
            <div
              className='faqs-heading'
              onClick={() => {
                setFirstFooter(!firstFooter);
              }}>
              <h6>what shipping method are available</h6>
              <span>{!firstFooter ? "+" : "-"}</span>
            </div>
            <div className={firstFooter ? "faqs-txt" : "faqs-txt displaynot"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laborum deserunt voluptatibus maxime, perferendis vel ut ex
              similique quaerat, a repellat saepe vitae. Voluptatibus sed
              voluptas dolorum, animi debitis consequuntur!
            </div>
          </div>
          <div className='faqs'>
            <div
              className='faqs-heading'
              onClick={() => {
                setThirdFooter(!thirdFooter);
              }}>
              <h6>what shipping method are available</h6>
              <span>{!thirdFooter ? "+" : "-"}</span>
            </div>
            <div className={thirdFooter ? "faqs-txt" : "faqs-txt displaynot"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laborum deserunt voluptatibus maxime, perferendis vel ut ex
              similique quaerat, a repellat saepe vitae. Voluptatibus sed
              voluptas dolorum, animi debitis consequuntur!
            </div>
          </div>
        </div>
        <div className='footer-overlap'>
          <p>Ready To Get Purchase A Product</p>
          <button className='sec-btn'>
            <a href="/products">
              view product
            </a>
            </button>
        </div>
      </div>
    </>
  );
};

export default About;
