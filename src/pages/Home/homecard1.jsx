// src/components/ProductList.js
import React, { useEffect, useState } from "react";
// import homecard from "./ProductCard";
import './homecard1.css';

const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/bfc58352-6fe2-41cb-9f34-1a601b8ef577")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className="homaecard">
      {products.length > 0 ? (
        products.slice(0,3).map((res) => (
          <div key={res.id} className="homecardbox">
            <img src={res.images}   className="homecard-image" />
           <div className="homecardtext">
             <h3>{res.name}</h3>
            <p>Category: {res.category}</p>
            <p>Price: ₹{res.price}</p>
            <p className="homecardtag">{res.tag}</p>
              
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

export default ProductList;
