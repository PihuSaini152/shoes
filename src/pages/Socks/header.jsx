import React from 'react'
import './header.css'
import BG from './Socks/header.avif'
import Card1 from './Socks/card1.jsx'

function header() {
  return (
    <>
    
    <div className="main">
        <img src={BG} alt="" />
    </div>
    <Card1/>
    
    </>
  )
}

export default header
