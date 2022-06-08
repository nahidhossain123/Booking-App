import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider_gal.css";

const Slidergal = ({explore,title,desc,community,slide}) => {
  const settings = {
    className: "center",
    infinite: true,
    arrows:true,
    centerPadding: "60px",
    slidesToShow: slide,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      }
    ]
  };
  return (
    <div className='slider-gal-container container'>
        <div className='slider-title'>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        <Slider {...settings}>
          {
            explore.map(explore_item =>(
              <div className='slider-item'>
              <img src={explore_item.img}/>
              <div className='details'>
                  <span className='title'>{explore_item.title}</span>
                  <span className='community'>{community}</span>
                  <span className='desc'>{explore_item.desc}</span>
                  <span className='price'>{explore_item.price}</span>
                  <div className='reviews-details'>
                    {explore_item.rating !==undefined  &&<span className='rating'>{explore_item.rating}</span>}
                    <span className='outcome'>{explore_item.outcome}</span>
                    <span className='reviews'>{explore_item.reviews}</span>
                  </div>
              </div>
          </div>
            ))
          }
         
          
        </Slider>
    </div>
  )
}

export default Slidergal