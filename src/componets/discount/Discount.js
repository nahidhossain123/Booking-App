import React from 'react';
import './discount.css';

const Discount = () => {
  return (
    <div className='discount-container container'>
        <div className='discount-item'>
          <div className='discount-text'>
              <h1>Book and save 7% on Rentalcars.com in vouchers</h1>
              <a href='#!'>See promotion details</a>
          </div>
          <div className='discount-image'>
              <img src='https://aff.bstatic.com/static/img/loyalty_tool/banner_default_720.jpg' alt='banner-image' />
          </div>
        </div>
    </div>
  )
}

export default Discount