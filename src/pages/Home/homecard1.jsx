import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homecard1.css"; // आपका CSS फाइल

const HomeCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  };

  return (
    <div className="homaecard">
      <Slider {...settings}>
        <div className="homecardbox1">
          <div className="homecardtext">
            <h1>Spring Essentials</h1>
            <h3>Breezy Shoes For Warmer Days Ahead</h3>
          </div>
          <div className="homecardbut1">
            <button className="hover-button">SHOP MEN</button>
            <button className="hover-button">SHOP WOMEN</button>
          </div>
        </div>

        <div className="homecardbox2">
          <div className="homecardtext">
            <h1>New Arrivals</h1>
            <h3>The Latest Styles & Limited-Edition Colors</h3>
          </div>
          <div className="homecardbut2">
            <button className="hover-button">SHOP MEN</button>
            <button className="hover-button">SHOP WOMEN</button>
          </div>
        </div>

        <div className="homecardbox3">
          <div className="homecardtext">
            <h1>Bestsellers</h1>
            <h3>Fan-Favorite Sneakers, Flats, and Slip-Ons</h3>
          </div>
          <div className="homecardbut3">
            <button className="hover-button">SHOP MEN</button>
            <button className="hover-button">SHOP WOMEN</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCards;
