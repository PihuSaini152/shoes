import React, { useState } from 'react'
import './MenShoesMain.css'
import ShoesMen from './ShoesMen.jsx'

function menShoes() {
    const [selected, setSelected] = useState("MEN");

    return (
        <>
            <div className="menshoes-main">
                <div className="menshoes-topnav">
                    <div className="menshoes-topnav-left">
                        <h5>Home/</h5>
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
                         <ShoesMen/>
                       </div>
                    )}
                </div>

            </div>


        </>
    )
}

export default menShoes
