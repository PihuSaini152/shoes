import React from 'react'
import '../Newarrivals/men_arrival.css'

function men_arrival() {
   const labels = ["NEW", "BESTSELLER", "EASY ON/OFF", "30% OFF"];

const shoes = [
  { id: 1, image: "/Men-Shoes/Sneakers/menshoes1.avif", price: 72.45, name: "Men's Tree Runner", selling: "EASY ON/OFF" },
  { id: 2, image: "/Men-Shoes/Sneakers/menshoes2.avif", price: 88.23, name: "Men's Trail Blazer", selling: "30% OFF" },
  { id: 3, image: "/Men-Shoes/Sneakers/menshoes3.avif", price: 54.78, name: "Men's Forest Trekker", selling: "BESTSELLER" },
  { id: 4, image: "/Men-Shoes/Sneakers/menshoes4.avif", price: 97.12, name: "Men's Mountain Runner", selling: "NEW" },
  { id: 5, image: "/Men-Shoes/Sneakers/menshoes5.avif", price: 66.34, name: "Men's Canyon Stride", selling: "30% OFF" },
  { id: 6, image: "/Men-Shoes/Sneakers/menshoes6.avif", price: 85.59, name: "Men's Urban Runner", selling: "BESTSELLER" },
  { id: 7, image: "/Men-Shoes/Sneakers/menshoes7.avif", price: 71.08, name: "Men's River Walker", selling: "NEW" },
  { id: 8, image: "/Men-Shoes/Sneakers/menshoes8.avif", price: 92.47, name: "Men's Desert Runner", selling: "30% OFF" },
  { id: 9, image: "/Men-Shoes/Sneakers/menshoes9.avif", price: 61.93, name: "Men's Coastal Strider", selling: "EASY ON/OFF" },
  { id: 10, image: "/Men-Shoes/Sneakers/menshoes10.avif", price: 78.20, name: "Men's Summit Runner", selling: "BESTSELLER" },
  { id: 11, image: "/Men-Shoes/Sneakers/menshoes11.avif", price: 99.05, name: "Men's Forest Glide", selling: "NEW" },
  { id: 12, image: "/Men-Shoes/Sneakers/menshoes12.avif", price: 55.44, name: "Men's Trail Walker", selling: "30% OFF" },
  { id: 13, image: "/Men-Shoes/Sneakers/menshoes13.avif", price: 89.77, name: "Men's Ridge Runner", selling: "EASY ON/OFF" },
  { id: 14, image: "/Men-Shoes/Sneakers/menshoes14.avif", price: 69.31, name: "Men's Peak Stride", selling: "BESTSELLER" },
  { id: 15, image: "/Men-Shoes/Sneakers/menshoes15.avif", price: 83.22, name: "Men's Canyon Walker", selling: "NEW" },
  { id: 16, image: "/Men-Shoes/Sneakers/menshoes16.avif", price: 90.10, name: "Men's River Runner", selling: "EASY ON/OFF" },
];
  return (
    <div>
         <div class="Men-s-New-Arrivals-foter-taxt-content">
        <h1>Shoes</h1>
        <p>Classic sneakers. Sporty running shoes.br <br /> Comfy loafers. We got the wear-all day (with everything) shoes you and your closet need.</p>
    </div>
          <div className='men-shoes-main'>
      <div className="men-shoes-card">
        {
            shoes.map((shu)=>(
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
                            shoes.slice(3,8).map((ss)=>(
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
        <div class="Men-s-New-Arrivals-foter-taxt">
        <h1>Men's New Arrivals</h1>
        
        <p>Welcome to our new arrivals for men—the fresh-out-of-the-box, squeaky-new styles that we're excited to share with our fans. Allbirds is continually adding new styles, new colors, and new variations on our fan favorites.</p>
        
        <p>Check back often, because lots of our new arrivals are inspired by the natural world, like our awe-inspiring National Parks, the incredible outdoor activities that our customers love, or the natural color palettes around us. We also love to partner with designers, influencers, athletes, and philanthropists to envision new ways to look sharp while caring for the planet through sustainable material: & practices.</p>
        
        <div class="divider"></div>
        
        <h2>WHAT IS A SUSTAINABLE SHOE?</h2>
        
        <ul>
                  <div class="divider"></div>

            <li>WHAT IS THE ADVANTAGE OF A SUSTAINABLE SHOE?</li>
                    <div class="divider"></div>

            <li>WHAT ARE ECO-FRIENDLY SNEAKER MATERIALS?</li>
                    <div class="divider"></div>

        </ul>
    </div>
      <div className="Allbirds-Approach">
                <h1>The Allbirds Approach</h1>
                <div className="Allbirds-Approach-Card">
                    <div className="Allbirds-Approach-Cards">
                        <h1>Wear-All-Day Comfort</h1>
                        <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Sustainability In Every Step</h1>
                        <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Materials From The Earth</h1>
                        <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                        <a href="">Learn More</a>

                    </div>
                </div>

            </div>

    </div>
  )
}

export default men_arrival
