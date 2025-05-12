import React from 'react'
import Rerun from '/rerun/rerun img.jpg'
import './rerun.css'

function rerun() {
    return (
        <div>
            <div className="Allbirds-ReRun">
                <img src={Rerun} alt="" />
                <div className="Allbirds-ReRun-taxt">
                    <h1>Allbirds ReRun™ hemant</h1>
                    <h1>A New Way To Get Old Favorites</h1>
                    <p>Allbirds ReRun™ is a marketplace where you can shop slightly imperfect and gently used products, extending their life and lowering our impact on the planet. Allbirds has partnered with Trove, a company that specializes in circular commerce, to run Allbirds ReRun™ on our behalf.

                    </p>
                    <h3>By clicking the link below, you will be leaving allbirds.com and heading to the ReRun marketplace site.</h3>
                    <button>Start Shopping ReRun™</button>

                </div>

            </div>
            <div className="Allbirds-Approach">
                <h1>The Allbirds Approach</h1>
                <div className="Allbirds-Approach-Card">
                    <div className="Allbirds-Approach-Cards">
                        <h1>Wear-All-Day Comfort</h1>
                        <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Sustainability In Every Step</h1>
                        <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Materials From The Earth</h1>
                        <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                        <a href="">Learn More</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default rerun
