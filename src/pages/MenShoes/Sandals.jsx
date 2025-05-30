import React from 'react'
import './Sneakers.css'

function Sandals() {
   const labels = ["NEW", "BESTSELLER", "EASY ON/OFF", "30% OFF"];

const shoes = [
  { id: 1, image: "/Men-Shoes/Sneakers/menshoes8.avif", price: 92.47, name: "Men's Desert Runner", selling: "30% OFF" },
  { id: 2, image: "/Men-Shoes/Sneakers/menshoes31.avif", price: 89.77, name: "Men's Ridge Runner", selling: "EASY ON/OFF" },
  { id: 3, image: "/Men-Shoes/Sneakers/menshoes32.avif", price: 99.05, name: "Men's Forest Glide", selling: "NEW" },
  { id: 4, image: "/Men-Shoes/Sneakers/menshoes33.avif", price: 55.44, name: "Men's Trail Walker", selling: "30% OFF" },
  { id: 5, image: "/Men-Shoes/Sneakers/menshoes13.avif", price: 89.77, name: "Men's Ridge Runner", selling: "EASY ON/OFF" },
  { id: 6, image: "/Men-Shoes/Sneakers/menshoes14.avif", price: 69.31, name: "Men's Peak Stride", selling: "BESTSELLER" },
  ];


  return (
   <>
    <div className='men-shoes-main'>
      <div className="men-shoes-card">
        {
            shoes.slice(0,4).map((shu)=>(
                <div key={shu.id} className="shoe-deta">
                    <div className="shoes-image">
                        <img src={shu.image} alt="" />
                        <h3>{shu.selling}</h3>
                    </div>
                    <div className='men-shoes-text'>
                        <h3>{shu.name}</h3>
                        <h4>${shu.price}</h4>
                    </div>
                    <div className="shoes-slid-image">
                        {
                            shoes.slice(2,6).map((ss)=>(
                                <div key={ss.id} className="slice-imege">
                                    <img  src={ss.image} alt=""/>
                                </div>
                            ))
                        }
                      
                    </div>
                     <div className="shoes-add">
            <p>Quick Add</p>
            <div className="shoes-sizes">
              <button>8</button>
              <button>8.5</button>
              <button>9</button>
              <button>9.5</button>
              <button>10</button>
              <button>10.5</button>
              <button>11</button>
              <button>11.5</button>
              <button>12</button>
              <button>12.5</button>
              <button>13</button>
              <button>13.5</button>
              <button>14</button>
              
            </div>
          </div>
                </div>
                
            ))
        }
         
                      
                  
      </div>
    </div>
   </>
  )
}

export default Sandals
