import React from 'react'
import './home3card.css'
import { Link } from 'react-router-dom'
function home3card() {
  return (
    <>
    <div className='homecard3main'>
        <div className="homecard3">
            <div className="homein1" style={{textAlign:"center"}}>
                <div className='text3rd'>
                    <h1>Cards On The Table</h1>
                <h3>Cards On The Table</h3>
                </div>
                <div className='hm3rdbutton'>
                <button><Link to="watch">WATCH NOW</Link></button>
                </div>
            </div>
            <div className="homein2" style={{textAlign:"center"}}>
                <div className='text3rd'>
                <h1>Canvas Piper</h1>
                <h3>Versatile Style, Durable Design</h3>
                </div>

                <div className='hm3rdbutton'>
                    <button>SHOP MEN</button>
                    <button>SHOP WOMEN</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default home3card
