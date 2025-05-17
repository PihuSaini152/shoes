import React from 'react';
import './Nav3.css';

const Nav3 = () => {
  return (
    <nav className="nav3">
      
      <div className="nav-links">
        <ul>
          <li><Link to="/Men">Men's Shoes</Link></li>
          <li><Link to ="./Women">Women's Shoes</Link></li>
          <li><Link to="/Arrivals">New Arrivals</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav3;
