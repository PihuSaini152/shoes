import React from 'react';
import './sockscard2.css';
import Sockscard3 from './sockscard3.jsx'

const socksData = [
  {
    id: 1,
    img: '/Socks/14.jpg',
    title: 'Anytime No Show Sock',
    color: 'Deep navy',
    price: '$18',
  },
  {
    id: 2,
    img: '/Socks/15.jpg',
    title: 'Anytime No Show Sock',
    color: 'white',
    price: '$18',
  },
  {
    id: 3,
    img: '/Socks/16.jpg',
    title: 'Anytime No Show Sock',
    color: ' Blizzard',
    price: '$18',
  },
  {
    id: 4,
    img: '/Socks/19.jpg',
    title: 'Anytime No Show Sock',
    color: 'natural gold grey',
    price: '$18',
  },
  {
    id: 5,
    img: '/Socks/20.jpg',
    title: 'Anytime No Show Sock',
    color: 'Blue Grey',
    price: '$18',
  },
  {
    id: 6,
    img: '/Socks/21.jpg',
    title: 'Anytime No Show Sock',
    color: 'Heather Grey',
    price: '$18',
  },

 
];

const Socks = () => {
  return (
    <>    <div className="s-headings">
        <h1>Crew Socks</h1>
        <p>A classic crew height sock designed to keep you comfortable whether it’s  <br />the workweek or the weekend.</p>
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

    <Sockscard3/>
    </>

  );
};

export default Socks;
