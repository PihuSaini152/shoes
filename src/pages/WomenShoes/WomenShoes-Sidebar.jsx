import React, {useState} from 'react'
import './WomenShoes-Sidebar.css/'
import { IoMdCloseCircleOutline } from "react-icons/io";


const allSizes = [
    "5", "5.5", "6.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11",
    "11.5", "12", "12.5", "13", "13.5", "14", "W5/M3", "W6/M4", "W7/M5", "W8/M6", "W9/M7",
    "W10/M8", "W11/M9", "W11/M10", "W11/M11", "W11/M12", "W11/M13", "W11/M14"
];

const bestForOptions = ["Everyday", "Warm Weather", "Active", "Cool Weather", "Wet Weather"];

const materialsOption = ["Tree Fiber Blend", "Canvas", "Organic Cotton", "Wool", "Corduroy",
    "Fluff Collection", "Cozy Collection", "Sugarcane Blend"];

const colorOption = [
    "Beige",
    "White",
    "Orange",
    "Green",
    "Blue",
    "Brown",
    "Red",
    "Black",
    "Grey",
    "Purple"
];


function WomenShoesSidebar() {
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

    const toggleBestFor = (occation) => {
        if (filters.some(f => f.label === occation)) {
            // Already selected → remove it
            setFilters(filters.filter(f => f.label !== occation));
        } else {
            // Not selected → add it
            setFilters([...filters, { label: occation, type: "occation" }]);
        }
    };

    const toggleMaterial = (material) => {
        if (filters.some(f => f.label === material)) {
            // Already selected → remove it
            setFilters(filters.filter(f => f.label !== material));
        } else {
            // Not selected → add it
            setFilters([...filters, { label: material, type: "material" }]);
        }
    };

    const toggleColor = (color) => {
        if (filters.some(f => f.label === color.name)) {
            // Already selected → remove it
            setFilters(filters.filter(f => f.label !== color.name));
        } else {
            // Not selected → add it
            setFilters([...filters, { label: color.name, type: "color" }]);
        }
    };


    return (
        <>
            <div className="shoesWomen-sidebar">
                <div className="shoeswomen-type">
                    <h1>Women's Shoes</h1>
                    <ul>
                        <li>Sneakers</li>
                        <li>Flats</li>
                        <li>Slip Ons</li>
                        <li>High Tops</li>
                        <li>Sandals</li>
                        <li>All-Weather</li>
                        <li>Bestsellers</li>
                        <li>Sale Shoes</li>

                    </ul>
                </div>

                <div className="shoeswomen-filterby">
                    <h2>Filter By:</h2>
                    <div className="shoeswomen-filters" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                        {filters.map((filter) => (
                            <div key={filter.label} style={{ color: "black", borderRadius: "40px", padding: "2px", display: "flex", border: "2px solid black" }}>
                                <p>{filter.label}</p>
                                <IoMdCloseCircleOutline onClick={() => removeFilter(filter.label)} style={{ marginLeft: "4px", fontSize: "19px", color: "gray" }} />
                            </div>
                        ))}
                        {filters.length > 0 && (
                            <button onClick={clearAll} style={{ background: "black", border: "none", color: "white", marginLeft: "8px", padding: "4px" }}>Clear All</button>
                        )}
                    </div>
                </div>

                <div className="shoeswomen-size">
                    <h3>SIZES</h3>
                    <p style={{ fontSize: "15px", marginTop: "10px" }}>Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</p>

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

                <div className="shoeswomen-BESTFOR">
                    <h3>BEST FOR</h3>
                    {bestForOptions.map(occation => (
                        <div key={occation} style={{ marginTop: "15px", cursor: "pointer", marginLeft: "8px", display: "flex", gap: "8px", alignItems: "center" }}>
                            <input type="checkbox"
                                checked={filters.some(f => f.label === occation)}
                                onChange={() => toggleBestFor(occation)}
                                style={{
                                    padding: "8px",
                                    cursor: "pointer"
                                }} />
                            <p>{occation}</p>
                        </div>
                    ))}
                </div>

                <div className="shoeswomen-Material">
                    <h3>MATERIALS</h3>
                    {materialsOption.map(material => (
                        <div key={material} style={{ marginTop: "15px", cursor: "pointer", marginLeft: "8px", display: "flex", gap: "8px", alignItems: "center" }}>
                            <input type="checkbox"
                                checked={filters.some(f => f.label === material)}
                                onChange={() => toggleMaterial(material)}
                                style={{
                                    padding: "8px",
                                    cursor: "pointer"
                                }} />
                            <p>{material}</p>
                        </div>
                    ))}
                </div>

                <div className="shoeswomen-color">
                    <h3>HUE</h3>
                    {colorOption.map(color => (
                        <div key={color} style={{ marginTop: "15px", cursor: "pointer", marginLeft: "8px", display: "flex", gap: "8px", alignItems: "center" }}>
                            <input type="checkbox"
                                value={color}
                                checked={filters.some(f => f.label === color)}
                                onChange={() => toggleColor(color)}
                                style={{
                                    padding: "8px",
                                    cursor: "pointer"
                                }} />
                            <p>{color.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default WomenShoesSidebar
