import React from 'react';
import './searches.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const Searches = () => {
    const settings = {
        className: "center",
        infinite: true,
        arrow:true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                arrows: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
              }
            }
          ]
      };
  return (
    <div className='search-list-contaienr container'>
        <h2>Your Recent Searches</h2>
        <Slider {...settings}>
            <div className='search-list'>
                <img src='https://t-cf.bstatic.com/xdata/images/city/square100/810974.webp?k=b33a6544cc24ce7bc24254024faaf2218462e16bdc089cf7055d9fecaa7921c0&o=' alt="serch" />
                <div className='search-details'>
                    <span className='title'>Kavoúsion</span>
                    <span className='search-date'>May 27-May 28, 2 people</span>
                </div>
            </div>
            <div className='search-list'>
                <img src='https://t-cf.bstatic.com/static/img/default_city_new/f6332c2300fb1a707f474aac290203ad5eb5590d.gif' alt="serch" />
                <div className='search-details'>
                    <span className='title'>Chiusanico</span>
                    <span className='search-date'>May 27-May 28, 2 people</span>
                </div>
            </div>
            <div className='search-list'>
                <img src='https://t-cf.bstatic.com/xdata/images/city/square100/693538.webp?k=a0f59068e765bf5c423e84eb83ccc8ba1bf30eed3b89d5fbfa8c9d17316cdffa&o=' alt="serch" />
                <div className='search-details'>
                    <span className='title'>Cala Anguila</span>
                    <span className='search-date'>May 27-May 28, 2 people</span>
                </div>
            </div>
            <div className='search-list'>
                <img src='https://t-cf.bstatic.com/xdata/images/city/square100/879409.webp?k=5ae0075dd2c4eb38ba197d88f436067ab78e7701b55ba1ab6699fdce795425ca&o=' alt="serch" />
                <div className='search-details'>
                    <span className='title'>Bransgore</span>
                    <span className='search-date'>May 27-May 28, 2 people</span>
                </div>
            </div>
            <div className='search-list'>
                <img src='https://t-cf.bstatic.com/xdata/images/city/square100/844107.webp?k=d2e327bd37d6b8a5e3b3f8f0a4c218387781b80dbbd5adb2d9e56d10f46c1659&o=' alt="serch" />
                <div className='search-details'>
                    <span className='title'>Sixt</span>
                    <span className='search-date'>May 27-May 28, 2 people</span>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Searches