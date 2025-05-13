import React from 'react';
import './sockscard2.css';
import Socksiteam from './socksitem.jsx'

const socksData = [
  {
    id: 1,
    img: '/Socks/23.jpg',
    title: 'Anytime No Show Sock',
    color: 'Deep navy',
    price: '$35',
  },
  {
    id: 2,
    img: '/Socks/24.jpg',
    title: 'Anytime No Show Sock',
    color: 'white',
    price: '$35',
  },
  {
    id: 3,
    img: '/Socks/26.jpg',
    title: 'Anytime No Show Sock',
    color: ' Blizzard',
    price: '$35',
  },
  {
    id: 4,
    img: '/Socks/27.jpg',
    title: 'Anytime No Show Sock',
    color: 'natural gold grey',
    price: '$35',
  },
  {
    id: 5,
    img: '/Socks/28.jpg',
    title: 'Anytime No Show Sock',
    color: 'Blue Grey',
    price: '$35',
  },
  {
    id: 6,
    img: '/Socks/29.jpg',
    title: 'Anytime No Show Sock',
    color: 'Heather Grey',
    price: '$35',
  },

 
];

const Socks = () => {
  return (
    <>    <div className="s-headings">
        <h1>3-Pack Socks</h1>

      </div>
    <div className="socks-container">
      {socksData.map((item) => (
        <div className="sock-card" key={item.id}>
          <img src={item.img} alt={item.title} className="sock-img" />
          <h3>{item.title}</h3>
          <p className="sock-color">{item.color}</p>
          <p className="sock-price">{item.price}</p>
          <div className="quick-add">
            <p>Quick Add</p>
            <div className="sizes">
              <button>S (W5-7)</button>
              <button>M (W8-10 / M8)</button>
              <button>L (W11 / M9-12)</button>
              <button>XL (M13-14)</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Socksiteam/>
    </>
    

  );
};

export default Socks;
