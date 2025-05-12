import React from 'react';
import './card1.css';

const socksData = [
  {
    id: 1,
    img: '/Socks/1.jpg',
    title: 'Anytime No Show Sock',
    color: 'Medium Grey',
    price: '$14',
  },
  {
    id: 2,
    img: '/Socks/2.jpg',
    title: 'Anytime No Show Sock',
    color: 'Blizzard',
    price: '$14',
  },
  {
    id: 3,
    img: '/Socks/3.jpg',
    title: 'Anytime No Show Sock',
    color: 'Natural Black',
    price: '$14',
  },
  {
    id: 4,
    img: '/Socks/4.jpg',
    title: 'Anytime No Show Sock',
    color: 'White',
    price: '$14',
  },
  {
    id: 5,
    img: '/Socks/5.jpg',
    title: 'Anytime No Show Sock',
    color: 'Blue Grey',
    price: '$14',
  },
  {
    id: 6,
    img: '/Socks/7.jpg',
    title: 'Anytime No Show Sock',
    color: 'Heather Grey',
    price: '$14',
  },
 
];

const Socks = () => {
  return (
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
  );
};

export default Socks;
