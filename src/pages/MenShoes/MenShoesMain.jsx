import React, { useState } from 'react'
import './MenShoesMain.css'
import { Link } from 'react-router-dom';
import Menshoes_sidebar from './menshoes-sidebar.jsx'
import Men_shoes from './men-shoes.jsx'


function menShoes() {
    const [selected, setSelected] = useState("MEN");

    return (
        <>
            <div className="menshoesmain-main">
                <div className="menshoesmain-topnav">
                    <div className="menshoesmain-topnav-left">
                        <Link to="/Home" style={{ color: "black" }}><h5>Home/</h5></Link>
                        <h5>Men's Shoes</h5>
                    </div>
                    <div className="menshoesmain-topnav-right">
                        <button className={selected === "WOMEN" ? "active" : ""} onClick={() => setSelected("WOMEN")}>WOMEN</button>
                        <button className={selected === "MEN" ? "active" : ""} onClick={() => setSelected("MEN")}>MEN</button>
                    </div>

                </div>
                <div className="menshoesmain-main2">
                    <div className="menshoesmain-sidebar">
                        <Menshoes_sidebar/>
                    </div>
                    <div className="menshoesmain-content">
                        {selected === "MEN" && (
                            <div>
                                <Men_shoes />
                            </div>
                        )}
                    </div>
                </div>

            </div>


        </>
    )
}

export default menShoes
