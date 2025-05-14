import React from 'react'
import './arrival.css'
import { Link } from 'react-router-dom'
import Women_arrival from './women_arrival'


function arrival() {
  return (
    <>
      <div className="arrival-header">

      </div>
      <div className="arrival-main">
        <Link to={'/men_arrival'}>
         <h2>MEN`S ARRIVALS </h2></Link>
       
        <Link to = "/women_arrival">
        <h2>WOMEN`S ARRIVALS</h2></Link>
        
      </div>
      <Women_arrival/>
    </>
  )
}

export default arrival
