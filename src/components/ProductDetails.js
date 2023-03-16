import React from "react";
import { useParams } from "react-router-dom";
import img from "../images/jordan.svg";
import ProductDetailImg from "../components/ProductDetailImg";
import "../css/productDetails.css";
import { FaCartPlus, FaPlus } from 'react-icons/fa'
import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";





const ProductDetails = ({}) => {
  const { id } = useParams();
const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div id='product'>
      <div className='product-name'>
        <h3>Nike hoops elite pro </h3>
        <div className='price'>$12000</div>
      </div>
      <div className='details-img'>
        <div className='details-img-corousel'><ProductDetailImg slides={SLIDES} options={OPTIONS}/></div>
      </div>
      <div className='product-details'>
        <h4 className=''>product details</h4>
        <p className=''>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          amet qui, molestias nostrum dolorem suscipit incidunt vitae totam
          officiis velit dolorum expedita nisi saepe doloribus eveniet porro,
          dignissimos perferendis quas excepturi cum voluptas? Deleniti magni
          culpa doloribus eos perspiciatis explicabo soluta, magnam consequatur
          nesciunt cum eaque quia beatae iure veniam dolor at nulla excepturi,
          commodi molestiae quae praesentium, saepe esse rem! Consequuntur
          reprehenderit quod expedita animi aliquid voluptatum? Numquam cum sint
          beatae omnis non repellendus dicta est iste natus doloribus modi
          fugiat, asperiores distinctio! Cupiditate sequi magnam eius saepe
          tenetur laudantium corrupti dolorum ratione. Facere repellendus itaque
          odio dolores voluptatem.
        </p>
      </div>
      <div className='fontSizes'>
        <h3>sizes available</h3>
        <div className='product-sizes'>
          <div className='btn'>40-41</div>
          <div className='btn'>40-41</div>
          <div className='btn'>40-41</div>
        </div>
      </div>
      <div className='cart-btns'>
        <div className='btn addToCart'>
          <FaPlus />
          {""}Add to cart
        </div>
        <div className='btn '>
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
