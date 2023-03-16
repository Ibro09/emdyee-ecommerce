import React, { useState } from "react";
import { social } from "../Data copy";
import { FaCopyright } from "react-icons/fa";
// import '../css/about.css'
import '../css/footer.css'
const Footer = () => {
  const [openFooter, setOpenFooter] = useState(false);
  const [firstFooter, setFirstFooter] = useState(false);
  const [thirdFooter, setThirdFooter] = useState(false);
  return (
    <footer>
      <div className="footer-center">
        <div className="footer-link-container">
          <div className="footer-txt">
            <h2>Emdyee</h2>
            <p>
              Your one stop online store where you can get all you the clothing you need
            </p>
            <div className="social">
              <ul className="footer-icons">
                {social.map(icons => {
                  return (
                    <a href={icons.url} key={icons.id}>
                      <li> {icons.icon}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-link">
              <div
                className="footer-head"
                onClick={() => {
                  setOpenFooter(!openFooter);
                }}>
                <h4>our site</h4> <span>{!openFooter ? "+" : "-"}</span>
              </div>

              <ul className={openFooter ? "tran" : "displaynone"}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/products">Shop</a>
                </li>
                <li>
                  <a href="/contact">contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <div
                className="footer-head"
                onClick={() => {
                  setThirdFooter(!thirdFooter);
                }}>
                <h4>contact us</h4>
                <span>{!thirdFooter ? "+" : "-"}</span>
              </div>

              <ul className={thirdFooter ? "tran" : "displaynone"}>
                <li>
                  <a href="">whatsapp</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">twitter</a>
                </li>
                <li>
                  <a href="tel:+2349066267514">phone</a>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <div
                className="footer-head"
                onClick={() => {
                  setFirstFooter(!firstFooter);
                }}>
                <h4>contact developer</h4>
                <span>{!firstFooter ? "+" : "-"}</span>
              </div>

              <ul className={firstFooter ? "tran" : "displaynone"}>
                <li>
                  <a href="https://ibsalam24@gmail.com">email</a>
                </li>
                <li>
                  <a href="https://wa.link/60fz3t">whatsapp</a>
                </li>
                <li>
                  <a href="https://github.com/Ibro09">github</a>
                </li>
                <li>
                  <a href="tel:+2349096166142">phone</a>
                </li>
              </ul>
            </div>
            <div className="social">
              <ul className="footer-icons">
                {social.map(icons => {
                  return (
                    <a href={icons.url} key={icons.id}>
                      <li> {icons.icon}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <FaCopyright /> {new Date().getFullYear()} Emdyee All Rights Reserved
        <div className="ibrahim">
          <a href="https://ibroport.netlify.app" target="_Blank">
            need a website like this? click here
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
