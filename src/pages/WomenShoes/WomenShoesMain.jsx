import React from 'react'
import './WomenShoesMain.css'
import { Link } from 'react-router-dom';
import Women_sidebar from './WomenShoes-Sidebar'
import WomenShoes from './WomenShoes'

function WomenShoesMain() {
  return (
    <>
      <div className="womenshoesmain-main">
        <div className="womenshoesmain-sidebar">
          <Women_sidebar />
        </div>
        <div className="womenshoesmain-content">
          <WomenShoes />
        </div>
      </div>
    </>
  )
}

export default WomenShoesMain
