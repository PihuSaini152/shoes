import React, { useState } from 'react';
import './mainnav.css'
import { FiSearch } from 'react-icons/fi';
import { FaRegUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navmain">
      <div className="nav-left">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={24} /> : <FaBars size={20} />}
        </div>
        <ul className="nav-links left">
          <li><Link to="/Men">Men</Link></li>
          <li><Link to="/Women">Women</Link></li>
          <li><Link to="/Socks">Socks</Link></li>
          <li><Link to="/Arrival"> Arrivals</Link></li>
        </ul>
      </div>

      <div className="nav-logo">
        <Link to="/">Allbirds</Link>
      </div>

      <div className="nav-right">
        <ul className="nav-links right">
          <li><Link to="/Susbainlity">Sustainability</Link></li>
          <li><Link to="/Rerun">ReRun</Link></li>
          <li><Link to ="/Stores">Stores</Link></li>
        </ul>
        <div className="nav-icons">
          <FiSearch />
          <FaRegUser />
          <Link to="/Help"><MdOutlineHelpOutline /></Link>
          <FaShoppingCart />
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={`nav-links mobile ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to ="/Men">Men</Link>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li>
       <Link to="/Women">Women</Link>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li><Link to="/Socks">Socks</Link></li>
        <li><Link to="/Arrival">New Arrivals</Link></li>
        <li>
         <Link to="/Susbainlity">Sustainability</Link>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li><Link to="/Rerun">ReRun</Link></li>
        <li><Link to="/Stores">Stores</Link></li>
        <li><Link to="/Acount">Account</Link></li>
        <li><Link to="/Help">Help</Link></li>
      </ul>
    </nav>
   
  );
};

export default NavMain;
