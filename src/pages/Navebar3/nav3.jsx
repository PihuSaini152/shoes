import React from 'react';
import './Nav3.css';
import { Link } from 'react-router-dom';

const Nav3 = () => {
  return (
    <nav className="nav3">
      <div className="nav-links">
        <ul>
          <li><Link to="/Menshoes">Men's Shoes</Link></li>
          <li><Link to="/Womenshoes">Women's Shoes</Link></li>
          <li><Link to="/Arrival">New Arrivals</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav3;
