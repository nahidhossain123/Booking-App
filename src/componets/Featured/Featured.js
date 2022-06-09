import React from 'react'
import './featured.css';

const Featured = ({direction,overlay,gal1,gal2}) => {
  return (
    <div className={direction === "columnreverse" ? "featured container reverse" : "featured container"}>
      <div className='feature-item-rowA'>
        {
          gal1.map(gal_item=>(
            <div className="featuredItem">
              <img
                src={gal_item.img}
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h3>{gal_item.title} <img src={gal_item.flag} alt="gallery" /></h3>
                <p>{gal_item.desc}</p>
              </div>
              <div className={direction === "columnreverse" ? "reverse-overlay" : "overlay"}></div>
              <div className={overlay === 'overlay' ? "overlay" : ""}></div>
            </div>
          ))
        }
      </div>
      <div className='featured-item-rowB'>
        {
          gal2.map(gal2_item=>(
            <div className="featuredItem">
              <img
                src={gal2_item.img}
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h3>{gal2_item.title}<img src={gal2_item.flag} alt="gallery" /></h3>
                <p>{gal2_item.desc}</p>
              </div>
              <div className={direction === "columnreverse" ? "reverse-overlay" : "overlay"}></div>
              <div className={overlay === 'overlay' ? "overlay" : ""}></div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Featured