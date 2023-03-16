import React from 'react'

const Product = ({img,price,name,txt}) => {
  return (
    <div className='product' >
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-txt'>
        <h6>{name}</h6>
        <p>{txt}</p>
        <div className='product-under'>
          <div className='price'>${price}</div>
          <button className='btn'>details</button>
        </div>
      </div>
    </div>
  );
}

export default Product
