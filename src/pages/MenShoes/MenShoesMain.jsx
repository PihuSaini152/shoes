import React, { useState } from 'react'
import './MenShoesMain.css'
import { Link } from 'react-router-dom';
import Menshoes_sidebar from './Menshoes-Sidebar.jsx'
// import Men_shoes from './MenShoes.jsx'
import Women_shoes_main from '../WomenShoes/WomenShoesMain.jsx'



function MenShoesMain() {
    const [selected, setSelected] = useState("MEN");

    return (
        <>
            <div className="menshoesmain-main">
                <div className="menshoesmain-topnav">
                    <div className="menshoesmain-topnav-left">
                        <Link to="/Home" style={{ color: "black" }}><h5>Home /</h5></Link>
                    </div>
                    <div className="menshoesmain-topnav-right">
                        <button className={selected === "WOMEN" ? "active" : ""} onClick={() => setSelected("WOMEN")}>WOMEN</button>
                        <button className={selected === "MEN" ? "active" : ""} onClick={() => setSelected("MEN")}>MEN</button>
                    </div>

                </div>
                <div className="menshoesmain-main2">
                    <div className="menshoesmain-content">
                        {selected === "MEN" && (
                            <div>
                                <Menshoes_sidebar />
                                {/* <Men_shoes /> */}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="menshoesmain-content">
                    {selected === "WOMEN" && (
                        <Women_shoes_main />
                    )}
                </div>

            </div>


        </>
    )
}

export default MenShoesMain
