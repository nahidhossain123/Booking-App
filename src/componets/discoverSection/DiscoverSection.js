import React from "react";
import "./discoverSection.css";

export default function DiscoverSection() {
  return (
    <div className="discover-section-container container">
      <a href="#">
        <div className="discover-item-container">
          <div>
            <div>
              <span>Find</span>
              <div className="discover-animated-text-container">
                <ul className="discover-animated-list">
                  <li>apartments</li>
                  <li>villas</li>
                  <li>aparthotels</li>
                  <li>holiday homes</li>
                  <li>cottages</li>
                  <li>homes</li>
                  <li>apartments</li>
                </ul>
              </div>
            </div>
            <span> for your next trip</span>
          </div>
          <span className="discover-btn">Discover homes</span>
        </div>
        <div className="discover-image">
          <picture>
            <img src="/img/booking-discover.png" alt="discover" />
          </picture>
        </div>
      </a>
    </div>
  );
}
