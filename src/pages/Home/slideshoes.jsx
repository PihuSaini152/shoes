import React, { useRef } from 'react';
import './slideshoes.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slideshoes.css'; // Your CSS file

import homeshoes1 from '/home/homeshoes (1).jpg'
import homeshoes2 from '/home/homeshoes (2).jpg'
import homeshoes3 from '/home/homeshoes (3).jpg'
import homeshoes4 from '/home/homeshoes (4).jpg'

const products = [
  { id: 1, title: "Men's Canvas Piper", price: "$90", color: "Blizzard", image: "/home/slidcard/slide1.avif" },
  { id: 2, title: "Men's Tree Runner Go", price: "$120", color: "Natural White/Rustic Orange", image: "/home/slidcard/slide2.avif" },
  { id: 3, title: "Women's Tree Glider", price: "$135", color: "Blizzard/Hanami Plum", image: "/home/slidcard/slide3.avif" },
  { id: 4, title: "Men's Tree Dasher 2 - Utility", price: "$145", color: "Natural White/Rustic Brown", image: "/home/slidcard/slide4.avif" },
  { id: 5, title: "Women's Breeze Runner", price: "$110", color: "Cloud White", image: "/home/slidcard/slide5.avif" },
  { id: 6, title: "Men's Coastal Glide", price: "$95", color: "Sand/Stone", image: "/home/slidcard/slide6.avif" },
  { id: 7, title: "Women's Sprint Sneaker", price: "$105", color: "Rose Mist", image: "/home/slidcard/slide7.avif" },
  { id: 8, title: "Men's Terrain Trainer", price: "$125", color: "Ash Gray", image: "/home/slidcard/slide8.avif" },
  { id: 9, title: "Women's Motion Knit", price: "$130", color: "Lilac Breeze", image: "/home/slidcard/slide9.avif" },
  { id: 10, title: "Men's Night Runner", price: "$140", color: "Midnight Black", image: "/home/slidcard/slide10.avif" }
];


function slideshoes() {

    const sliderRef = useRef(null);

  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,  // default for large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700, // screen size ≤ 700px
      settings: {
        slidesToShow: 2,  // show only one card
      },
    },
    {
      breakpoint: 480, // screen size ≤ 700px
      settings: {
        slidesToShow: 1,  // show only one card
      },
    },
  ],
};
  return (
    <>
      <div className="slideshoes-main">
         <div className='slideshoes'>
       <Slider ref={sliderRef} {...settings}>
        {products.map((shoe) => (
          <div key={shoe.id} className="slide-card">
            <img src={shoe.image} alt={shoe.title} className="shoe-img" />
            <div className="shoe-info">
              <h3>{shoe.title}</h3>
              <p className="color">{shoe.color}</p>
              <p className="price">{shoe.price}</p>
            </div>
          </div>
        ))}
      </Slider>
       <div className="custom-nav-buttons">
       <button onClick={() => sliderRef.current?.slickPrev()}> <FaArrowLeft /></button>
<button onClick={() => sliderRef.current?.slickNext()}> <FaArrowRight /></button>

      </div>
    </div>
      </div>
    </>
  )
}

export default slideshoes
