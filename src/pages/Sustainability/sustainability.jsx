import React, { useState } from 'react'
import './sustainability.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Sustainimg3 from '/Sustainability/sustainimg3.jpg'
import Sustainimg4 from '/Sustainability/sustainimg4.jpg'



function sustainability() {
    const [menuOpenSustain, setMenuOpenSustain] = useState(false);

    return (
        <>
            <div className="sustain-main">

                <div className="sustainMenu" onClick={() => setMenuOpenSustain(!menuOpenSustain)}>
                    {menuOpenSustain ? <IoMdCloseCircleOutline size={24} /> : <IoIosArrowForward size={20} />}
                </div>

                <div className="sustain-text">

                    <div className="sustain">
                        <h3>Initiatives</h3>
                        <div className="sustainA">

                            <p>Our Sustainability Strategy</p>
                            <p>MO.ONSHOT</p>
                            <p>How We Operate</p>
                            <p>Carbon Footprint</p>
                            <p>Regenrative Ariculture</p>
                            <p>Renewable Materials</p>
                            <p>Carbon Offsets</p>
                            <p>Responsible Energy</p>

                        </div>
                    </div>
                    <div className="sustain">
                        <h3>Featured</h3>
                        <div className="sustain1">
                            <h3 style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontSize: "22px",
                                height: "120px"
                            }}>Our Sustainability Strategy</h3>
                        </div>
                        <div className="sustain2">
                            <h3 style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontSize: "22px",
                                height: "120px"
                            }}>ALLBIRDS RERUN MARKETPLACE</h3>
                        </div>
                    </div>

                </div>
                {/* menu open in mediaquery */}
                <h1 className={`sustain-Menu ${menuOpenSustain ? 'active' : ''}`}>
                    <li>
                        <h3>INITIATIVE</h3>
                        <span className="sustainarrow"><IoIosArrowForward size={14} /></span>
                    </li>
                    <li>
                        <h3>FEATURED</h3>
                        <div className="sustainimage">
                            <img src={Sustainimg3} alt="" />
                            <img src={Sustainimg4} alt="" />
                        </div>
                    </li>
                </h1>

            </div>


        </>
    )
}

export default sustainability
