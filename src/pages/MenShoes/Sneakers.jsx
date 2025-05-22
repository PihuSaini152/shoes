import React from 'react'
import './Sneakers.css'
function Sneakers() {
    
   const shoes = [
  { id: 1, image: "/Men-Shoes/Sneakers/menshoes1.avif", price: 72.45, name: "Men's Tree Runner" },
  { id: 2, image: "/Men-Shoes/Sneakers/menshoes2.avif", price: 88.23, name: "Men's Trail Blazer" },
  { id: 3, image: "/Men-Shoes/Sneakers/menshoes3.avif", price: 54.78, name: "Men's Forest Trekker" },
  { id: 4, image: "/Men-Shoes/Sneakers/menshoes4.avif", price: 97.12, name: "Men's Mountain Runner" },
  { id: 5, image: "/Men-Shoes/Sneakers/menshoes5.avif", price: 66.34, name: "Men's Canyon Stride" },
  { id: 6, image: "/Men-Shoes/Sneakers/menshoes6.avif", price: 85.59, name: "Men's Urban Runner" },
  { id: 7, image: "/Men-Shoes/Sneakers/menshoes7.avif", price: 71.08, name: "Men's River Walker" },
  { id: 8, image: "/Men-Shoes/Sneakers/menshoes8.avif", price: 92.47, name: "Men's Desert Runner" },
  { id: 9, image: "/Men-Shoes/Sneakers/menshoes9.avif", price: 61.93, name: "Men's Coastal Strider" },
  { id: 10, image: "/Men-Shoes/Sneakers/menshoes10.avif", price: 78.20, name: "Men's Summit Runner" },
  { id: 11, image: "/Men-Shoes/Sneakers/menshoes11.avif", price: 99.05, name: "Men's Forest Glide" },
  { id: 12, image: "/Men-Shoes/Sneakers/menshoes12.avif", price: 55.44, name: "Men's Trail Walker" },
  { id: 13, image: "/Men-Shoes/Sneakers/menshoes13.avif", price: 89.77, name: "Men's Ridge Runner" },
  { id: 14, image: "/Men-Shoes/Sneakers/menshoes14.avif", price: 69.31, name: "Men's Peak Stride" },
  { id: 15, image: "/Men-Shoes/Sneakers/menshoes15.avif", price: 83.22, name: "Men's Canyon Walker" },
  { id: 16, image: "/Men-Shoes/Sneakers/menshoes16.avif", price: 90.10, name: "Men's River Runner" },
  { id: 17, image: "/Men-Shoes/Sneakers/menshoes17.avif", price: 58.65, name: "Men's Urban Trekker" },
  { id: 18, image: "/Men-Shoes/Sneakers/menshoes18.avif", price: 76.88, name: "Men's Mountain Glide" },
  { id: 19, image: "/Men-Shoes/Sneakers/menshoes19.avif", price: 80.43, name: "Men's Desert Stride" },
  { id: 20, image: "/Men-Shoes/Sneakers/menshoes20.avif", price: 67.55, name: "Men's Forest Walker" },
  { id: 21, image: "/Men-Shoes/Sneakers/menshoes21.avif", price: 53.98, name: "Men's Trail Runner" },
  { id: 22, image: "/Men-Shoes/Sneakers/menshoes22.avif", price: 95.70, name: "Men's Peak Walker" },
  { id: 23, image: "/Men-Shoes/Sneakers/menshoes23.avif", price: 77.64, name: "Men's Ridge Strider" },
  { id: 24, image: "/Men-Shoes/Sneakers/menshoes24.avif", price: 62.10, name: "Men's Summit Walker" },
  { id: 25, image: "/Men-Shoes/Sneakers/menshoes25.avif", price: 74.83, name: "Men's Coastal Runner" },
];

  return (
   <>
    <div className='men-shoes-main'>
      <div className="men-shoes-card">
        {
            shoes.map((shu)=>(
                <div key={shu.id} className="shoe-deta">
                    <div className="shoes-image">
                        <img src={shu.image} alt="" />
                    </div>
                    <div className='men-shoes-text'>
                        <h3>{shu.name}</h3>
                        <h4>${shu.price}</h4>
                    </div>
                    <div className="shoes-slid-image">
                        
                    </div>
                </div>
            ))
        }
      </div>
    </div>
   </>
  )
}

export default Sneakers
