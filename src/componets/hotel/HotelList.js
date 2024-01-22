import React from "react";
import "./hotel.css";

export const HotelList = () => {
  return (
    <div>
      <div className="hotel">
        <div>
          <img src="./img/281047348.webp" alt="hotel" />
        </div>
        <div className="destials">
          <h3>Hotel Boss</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
        </div>
        <div className="rating">
          <div className="rating-items">
            <div className="rating-count">
              <p>Review score</p>
              <p>5000 reviws</p>
            </div>
            <span className="rating-score">6.7</span>
          </div>
          <button>
            <span>Show Prices</span>
          </button>
        </div>
      </div>
    </div>
  );
};
