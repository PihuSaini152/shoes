import React from 'react';
import './Nav3.css';

const Nav3 = () => {
  return (
    <nav className="nav3">
      
      <div className="nav-links">
        <ul>
          <li><Link to="/Men">Men's Shoes</Link></li>
          <li><a href="#">Women's Shoes</a></li>
          <li><a href="#">New Arrivals</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav3;
