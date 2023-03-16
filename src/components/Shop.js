import React from "react";
import { FaAmericanSignLanguageInterpreting, FaConnectdevelop, FaFilter, FaSleigh, FaSlidersH, FaSlideshare, FaWhatsapp } from "react-icons/fa";
import { product } from "../Data copy";
import  Product  from "./Product";
import "../css/shop.css";
const Shop = () => {
  return (
    <div id='about'>
      <h2 className='italics'>About us</h2>
      <p className='heading'>
        Home
        <span>//About</span>
      </p>
      <div className='input'>
        <input type='text' className='search' placeholder='Search' />
        <button className='btn search-btn'>search</button>
        <button className='btn filter'>
          <FaSlidersH className='filter' />
        </button>
      </div>
      <div className='btns'>
        <button className='btn'>All</button>
        <button className='btn'>Shoes</button>
        <button className='btn'>Watch</button>
        <button className='btn'>Shirt</button>
        <button className='btn'>Other</button>
      </div>
      <div className='products'>
        {product.map(item => {
          const { id, img, txt, name, price } = item;

          return <Product {...item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
