import React from 'react'
import './WomenShoes.css'

function womenSneakers() {
   const labels = ["NEW", "BESTSELLER", "EASY ON/OFF", "30% OFF"];

const shoes = [
  { id: 1, image: "/Women-Shoes/womenshoes1.avif", price: 72.45, name: "Women's Tree Runner", selling: "EASY ON/OFF" },
  { id: 2, image: "/Women-Shoes/womenshoes2.avif", price: 88.23, name: "Women's Trail Blazer", selling: "" },
  { id: 3, image: "/Women-Shoes/womenshoes3.avif", price: 54.78, name: "Women's Forest Trekker", selling: "BESTSELLER" },
  { id: 4, image: "/Women-Shoes/womenshoes4.avif", price: 97.12, name: "Women's Mountain Runner", selling: "" },
  { id: 5, image: "/Women-Shoes/womenshoes5.avif", price: 66.34, name: "Women's Canyon Stride", selling: "30% OFF" },
  { id: 6, image: "/Women-Shoes/womenshoes6.avif", price: 74.99, name: "Women's Swift Glider", selling: "" },
  { id: 7, image: "/Women-Shoes/womenshoes7.avif", price: 80.00, name: "Women's City Hiker", selling: "TRENDING" },
  { id: 8, image: "/Women-Shoes/womenshoes8.avif", price: 63.49, name: "Women's Urban Jogger", selling: "" },
  { id: 9, image: "/Women-Shoes/womenshoes9.avif", price: 85.10, name: "Women's Trail Mixer", selling: "NEW" },
  { id: 10, image: "/Women-Shoes/womenshoes10.avif", price: 90.25, name: "Women's Eco Runner", selling: "" },
  { id: 11, image: "/Women-Shoes/womenshoes11.avif", price: 78.45, name: "Women's Soft Dash", selling: "LIMITED" },
  { id: 12, image: "/Women-Shoes/womenshoes12.avif", price: 64.35, name: "Women's Ridge Roamer", selling: "" },
  { id: 13, image: "/Women-Shoes/womenshoes13.avif", price: 93.89, name: "Women's Glide Trek", selling: "BESTSELLER" },
  { id: 14, image: "/Women-Shoes/womenshoes14.avif", price: 59.99, name: "Women's Nature Runner", selling: "" },
  { id: 15, image: "/Women-Shoes/womenshoes15.avif", price: 69.00, name: "Women's Comfort Hiker", selling: "20% OFF" },
  { id: 16, image: "/Women-Shoes/womenshoes16.avif", price: 71.30, name: "Women's Airstep", selling: "" },
  { id: 17, image: "/Women-Shoes/womenshoes17.avif", price: 87.25, name: "Women's Flex Trek", selling: "HOT" },
  { id: 18, image: "/Women-Shoes/womenshoes18.avif", price: 76.80, name: "Women's Cloud Roam", selling: "" },
  { id: 19, image: "/Women-Shoes/womenshoes19.avif", price: 92.40, name: "Women's Motion Rise", selling: "TRENDING" },
  { id: 20, image: "/Women-Shoes/womenshoes20.avif", price: 68.75, name: "Women's Earthbound", selling: "" },
  { id: 21, image: "/Women-Shoes/womenshoes21.avif", price: 84.90, name: "Women's Zenith Dash", selling: "30% OFF" },
  { id: 22, image: "/Women-Shoes/womenshoes22.avif", price: 62.35, name: "Women's Natural Step", selling: "" },
  { id: 23, image: "/Women-Shoes/womenshoes23.avif", price: 95.60, name: "Women's Altitude Trail", selling: "NEW" },
  { id: 24, image: "/Women-Shoes/womenshoes24.avif", price: 73.20, name: "Women's Pulse Glide", selling: "" },
  { id: 25, image: "/Women-Shoes/womenshoes25.avif", price: 79.99, name: "Women's Cozy Trek", selling: "EASY ON/OFF" },
  { id: 26, image: "/Women-Shoes/womenshoes26.avif", price: 67.50, name: "Women's Rapid Runner", selling: "" },
  { id: 27, image: "/Women-Shoes/womenshoes27.avif", price: 91.30, name: "Women's Velocity Trail", selling: "LIMITED" },
  { id: 28, image: "/Women-Shoes/womenshoes28.avif", price: 75.00, name: "Women's Peak Walker", selling: "" },
  { id: 29, image: "/Women-Shoes/womenshoes29.avif", price: 83.10, name: "Women's Daylight Dash", selling: "30% OFF" }
]



  return (
   <>
    <div className='women-shoes-main'>
      <div className="women-shoes-card">
        {
            shoes.slice(0,2).map((shu)=>(
                <div key={shu.id} className="women-shoe-deta">
                    <div className="women-shoes-image">
                        <img src={shu.image} alt="" />
                        <h3>{shu.selling}</h3>
                    </div>
                    <div className='women-shoes-text'>
                        <h3>{shu.name}</h3>
                        <h4>${shu.price}</h4>
                    </div>
                    <div className="women-shoes-slid-image">
                        {
                            shoes.slice(3,8).map((ss)=>(
                                <div key={ss.id} className="women-slice-imege">
                                    <img  src={ss.image} alt=""/>
                                </div>
                            ))
                        }
                      
                    </div>
                     <div className="women-shoes-add">
            <p>Quick Add</p>
            <div className="women-shoes-sizes">
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
         <div className="women-bgcard">
  <h2 className="women-bgcard-title">Start With Fresh Canvas</h2>
  <p className="women-bgcard-subtitle">Sophisticated sneakers, endless <br /> possibilities.  </p>
  <div className="women-bgcard-buttons">
    <button className="women-bgcard-btn">MEN'S SALE</button>
    <button className="women-bgcard-btn">WOMEN'S SALE</button>
  </div>
</div>
 {
            shoes.slice(2,10).map((shu)=>(
                <div key={shu.id} className="women-shoe-deta">
                    <div className="women-shoes-image">
                        <img src={shu.image} alt="" />
                        <h3>{shu.selling}</h3>
                    </div>
                    <div className='women-shoes-text'>
                        <h3>{shu.name}</h3>
                        <h4>${shu.price}</h4>
                    </div>
                    <div className="women-shoes-slid-image">
                        {
                            shoes.slice(3,8).map((ss)=>(
                                <div key={ss.id} className="women-slice-imege">
                                    <img  src={ss.image} alt=""/>
                                </div>
                            ))
                        }
                      
                    </div>
                     <div className="women-shoes-add">
            <p>Quick Add</p>
            <div className="women-shoes-sizes">
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

         <div className="women-bgcard1">
  <h2 className="women-bgcard-title">Just Add White</h2>
  <p className="women-bgcard-subtitle">
   Summer outfits require comfort and <br /> versatility. AKA: White sneakers.
  </p>
  <div className="women-bgcard-buttons">
    <button className="women-bgcard-btn">MEN'S SALE</button>
    <button className="women-bgcard-btn">WOMEN'S SALE</button>
  </div>
</div>

 {
            shoes.slice(18,29).map((shu)=>(
                <div key={shu.id} className="women-shoe-deta">
                    <div className="women-shoes-image">
                        <img src={shu.image} alt="" />
                        <h3>{shu.selling}</h3>
                    </div>
                    <div className='women-shoes-text'>
                        <h3>{shu.name}</h3>
                        <h4>${shu.price}</h4>
                    </div>
                    <div className="women-shoes-slid-image">
                        {
                            shoes.slice(3,8).map((ss)=>(
                                <div key={ss.id} className="women-slice-imege">
                                    <img  src={ss.image} alt=""/>
                                </div>
                            ))
                        }
                      
                    </div>
                     <div className="women-shoes-add">
            <p>Quick Add</p>
            <div className="women-shoes-sizes">
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

export default womenSneakers

