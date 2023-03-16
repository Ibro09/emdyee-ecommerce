import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import star from "../images/star.svg";
import fastShipping from "../images/fastShipping.svg";
import BestQuality from "../images/bestQuality.svg";
import check from "../images/check.svg";
import jordan from "../images/jordan.svg";

const Home = () => {
  return (
    <>
      <Hero />
      <div id='home'>
        <div className='overlap-trust'>
          <div className='overlap-trust-center'>
            <div className='overlap-trust-text'>
              Trusted by over 3000+ clients worldwide since 2017
            </div>
            <div className='overlap-trust-ratings'>
              <div className='rating'>
                <h2>4.3</h2>
                <img src={star} className='star' />
              </div>
              <div className='products-info'>
                <h2>20M+</h2>
                <p>Worldwide products per year</p>
              </div>
            </div>
          </div>
        </div>

        <div className='benefit'>
          <h2>Benefit of using our services</h2>
          <div className='benefits'>
            <div className='benefits-rect'>
              <img src={BestQuality} alt='best quality' className='icon' />
              <h3>best quality</h3>
              <p>
                Our shoes comes with the best quality there is that will last
                you for a long time
              </p>
            </div>
            <div className='benefits-rect'>
              <img src={fastShipping} alt='best quality' className='icon' />
              <h3>fast shipping</h3>
              <p>
                our products land on your doorstep within 3-5 business day and
                in some cases less than that.
              </p>
            </div>
            <div className='benefits-rect'>
              <img src={check} alt='best quality' className='icon' />
              <h3>lowest prices</h3>
              <p>
                our prices are the lowest compared to other places. We sell at a
                wholesale price
              </p>
            </div>
          </div>
        </div>
        <div className='best-selling'>
          <h2>best selling</h2>
          <div className='shoes-product'>
            <div className='shoe-product'>
              <img src={jordan} alt='jordan' />
              <h3>jordan</h3>
              <span>
                <a href='/product'>
                  <button className='btn'>view product</button>
                </a>
                N20,000
              </span>
            </div>
            <div className='shoe-product'>
              <img src={jordan} alt='jordan' />
              <h3>nike airforce</h3>
              <span>
                <a href='/product'>
                  <button className='btn'>view product</button>
                </a>
                N12,000
              </span>
            </div>
            <div className='shoe-product'>
              <img src={jordan} alt='jordan' />
              <h3>sb dunk</h3>
              <span>
                <a href='/product'>
                  <button className='btn'>view product</button>
                </a>
                N16,000
              </span>
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

export default Home;
