import React from 'react'
import './men.css'

function men() {
  return (
    <>
      <div className="men-main">
        <div className="men">
          <ul>
            <li><h3>SHOES</h3></li>

            <li><p>Snekers</p></li>
            <li><p>Slip Ons</p></li>
            <li><p>High Tops</p></li>
            <li><p>Sandals</p></li>
            <li><p>Water-Repellent Snekers</p></li>
            <li><p>Sale</p></li>
            <li><p>Shop All</p></li>
          </ul>
        </div>

        <div className="men">
          <ul>
            <li><h3>BESTSELLER</h3></li>

            <li><p>Tree Runner Go</p></li>
            <li><p>Tree Dasher 2</p></li>
            <li><p>Canvas Piper</p></li>
            <li><p>Tree Runner</p></li>
            <li><p>Tree Glider</p></li>
            <li><p>Tree Dasher Relay</p></li>
            <li><p>Wool Runner Go</p></li>
            <li><p>Shop all</p></li>
          </ul>
        </div>

        <div className="men">
          <ul>
            <li><h3>APPAREL & MORE</h3></li>

            <li><p>Socks</p></li>
            <li><p>Tees</p></li>
            <li><p>Sweats</p></li>
            <li><p>Bags</p></li>
            <li><p>Hats</p></li>
            <li><p>Insoles</p></li>
            <li><p>Gift Cards</p></li>
          </ul>
        </div>
        <div className="men">
          <ul>
            <li><h3>Featured</h3></li>
          </ul>
          <div className="men1">
            <h3 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "22px",
              height:"140px"
            }}>MEN'S NEW ARRIVALS</h3>
          </div>
          <div className="men2">
            <h3 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "22px",
              height:"140px"
            }}>BESTSELLERS</h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default men
