import React, { useState } from 'react'
import './MenShoesMain.css'
import { Link } from 'react-router-dom';
import ShoesMen from './pages/MenShoes/ShoesMen.jsx'


function menShoes() {
    const [selected, setSelected] = useState("MEN");

    return (
        <>
            <div className="menshoes-main">
                <div className="menshoes-topnav">
                    <div className="menshoes-topnav-left">
                        <Link to="/Home" style={{color:"black"}}><h5>Home/</h5></Link>
                        <h5>Men's Shoes</h5>
                    </div>
                    <div className="menshoes-topnav-right">
                        <button className={selected === "WOMEN" ? "active" : ""} onClick={() => setSelected("WOMEN")}>WOMEN</button>
                        <button className={selected === "MEN" ? "active" : ""} onClick={() => setSelected("MEN")}>MEN</button>
                    </div>

                </div>
                <div className="menshoes-content">
                    {selected === "MEN" && (
                       <div>
                            <ShoesMen />
                        
                       </div>
                    )}
                </div>

            </div>


        </>
    )
}

export default menShoes
