import React, { useState } from 'react'
import './ShoesMen.css'
import { IoMdCloseCircleOutline } from "react-icons/io";


const allSizes = [
    "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5",
    "14", "W5/M3", "W6/M4", "W7/M5", "W8/M6", "W9/M7", "W10/M8", "W11/M9"
];

function shoesmen() {
    const [filters, setFilters] = useState([]);

    const removeFilter = (label) => {
        setFilters(filters.filter(f => f.label !== label));
    };

    const clearAll = () => {
        setFilters([]);
    };

    const addSizeFilter = (size) => {
        if (!filters.some(f => f.label === size)) {
            setFilters([...filters, { label: size, type: "size" }]);
        }
    };

    return (
        <>
            <div className="shoesmen-sidebar">
                <div className="shoesmen-type">
                    <h1>Men's Shoes</h1>
                    <ul>
                        <li>Sneakers</li>
                        <li>Slip Ons</li>
                        <li>High Tops</li>
                        <li>Sandals</li>
                        <li>All-Weather</li>
                        <li>Bestsellers</li>
                        <li>Sale Shoes</li>
                        <li>Sale Shoes1</li>
                        <li>Sale Shoes3</li>

                    </ul>
                </div>

                <div className="shoesmen-filterby">
                    <h2>Filter By:</h2>
                    <div className="shoesmen-filters" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {filters.map((filter) => (
                            <div key={filter.label} style={{ backgroundColor: "gray", color: "black", borderRadius: "20px", padding: "5px", display:"flex" }}>
                                <h3>{filter.label}</h3>
                                <IoMdCloseCircleOutline onClick={() => removeFilter(filter.label)} style={{ marginLeft: "8px", fontSize: "20px" }} />
                            </div>
                        ))};
                        {filters.length > 0 && (
                            <button onClick={clearAll} style={{ background: "black", border: "none", color: "white", marginLeft: "8px", padding:"4px" }}>Clear All</button>
                        )}
                    </div>
                </div>

                <div className="shoesmen-size">
                    <h3>SIZES</h3>
                    <h3>All sizes</h3>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(60px,1fr))", gap: "5px", marginTop: "20px" }}>
                        {allSizes.map(size => (
                            <button key={size} onClick={() => addSizeFilter(size)}
                                style={{
                                    padding: "8px",
                                    border: filters.some(f => f.label === size) ? "2px solid black" : "1px solid #ccc",
                                    backgroundColor: filters.some(f => f.label === size) ? "black" : "#fff",
                                    borderRadius: "5px",
                                    color: filters.some(f => f.label === size) ? "white" : "black"
                                }}>{size}</button>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}

export default shoesmen
