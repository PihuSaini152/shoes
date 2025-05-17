import React from 'react'
import './home2card.css'
import homemain from '/home/homecard2.jpg'

import homeshoes1 from '/home/homeshoes (1).jpg'
import homeshoes2 from '/home/homeshoes (2).jpg'
import homeshoes3 from '/home/homeshoes (3).jpg'
import homeshoes4 from '/home/homeshoes (4).jpg'

const shoesData = [
  {
    id: 1,
    name: "Tree Dasher 2",
    color: "Rustic Orange",
    price: 135,
    img:homeshoes1
  },
  {
    id: 2,
    name: "Tree Runner Go",
    color: "Natural White/Rustic Orange",
    price: 120,
    img: homeshoes4
  },
  {
    id: 3,
    name: "Tree Piper",
    color: "Blizzard/Rustic Orange",
    price: 105,
    img: homeshoes3
  },
  {
    id: 4,
    name: "Tree Runner",
    color: "Rustic Orange",
    price: 98,
    img: homeshoes2
  }
];


function home2card() {
  return (
    <div>
      <div className="homecardmain">
        <div className="homecard0">
            <div className="hcard1">
              <img src={homemain} alt="" />
            <div className="hcardtext">
                <h1>Rock And Stroll In Comfort</h1>
                <h3 style={{marginTop:"10px"}}>Effortlessly comfy styles take color cues from the Southwest’s rustic rock <br /> formations.</h3>

                <div style={{display:"flex",gap:"10px"}}>
                    <button>SHOP MEN</button>
                    <button>SHOP WOMEN</button>
                </div>
            </div>
            </div>

            <div className="hcard2">
 <div className="shoe-list">
      {shoesData.map(shoe => (
        <div key={shoe.id} className="shoe-card">
          <img src={shoe.img} alt={shoe.name} className='shoesimg' />
          <div className="shoestext">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            </div>
          <p>{shoe.color}</p>
          
          </div>
        </div>
      ))}
    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default home2card
