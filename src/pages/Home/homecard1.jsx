// src/components/ProductList.js
import React, { useEffect, useState } from "react";
// import homecard from "./ProductCard";
import './homecard1.css';

import homecard1 from '/public/home/homecard1.jpg'
import homecard2 from '/public/home/homecard4.jpg'
import homecard3 from '/public/home/homecard3.jpg'


const homeimg = [
  {
    id: 1,
    name: "Bestsellers",
    category: "Fan-Favorite Sneakers, Flats, and Slip-Ons",
    price: 5814,
    tag: "Exclusive",
    images:homecard1
  },
  {
    id: 2,
    name: "New Arrivals",
    category: "The Latest Styles & Limited-Edition Colors",
    price: 4137,
    tag: "New",
    images: homecard2
  },
  {
    id: 3,
    name: "Spring Essentials",
    category: "Breezy Shoes For Warmer Days Ahead",
    price: 3682,
    tag: "Best Seller",
    images: homecard3
  }
];


const homecard = () => {
 

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://run.mocky.io/v3/bfc58352-6fe2-41cb-9f34-1a601b8ef577")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <h2>Loading products...</h2>;
  // }

  return (
    <div className="homaecard">
     
      {homeimg.length > 0 ? (
        homeimg.map((res) => (
          <div key={res.id} className="homecardbox">
               <img src={res.images}   className="homecard-image" />
          
           <div className="homecardtext">
             <h1>{res.name}</h1>
            <h3> {res.category}</h3>
            {/* <p>Price: ₹{res.price}</p> */}
            {/* <p className="homecardtag">{res.tag}</p> */}
              
           </div>
           <div className="homecardbut">
            <button className="hover-button">SHOP MEN</button>
            <button className="hover-button">SHON WOMEN</button>
           </div>
          </div>
        ))
      ) : (
        <h2>No products available</h2>
      )}
    </div>
  );
};

export default homecard;
