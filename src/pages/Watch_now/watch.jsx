import React from "react";
import "./watch.css"; 
import Watch2 from './watch2.jsx'

const Watch = () => {
  return (
    <>
    <div className="watch-section">
      {/* Hero Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h3>allbirds PRESENTS</h3>
          <h1>Cards On The Table</h1>
          <h4>WITH</h4>
          <h2>STANLEY TUCCI</h2>
        </div>
      </div>

      {/* Curious By Nature Section */}
      <div className="curious-section">
        <h2>Curious By Nature</h2>
        <p>
          What does it mean to be curious by nature? At Allbirds, it’s in everything we
          do. Our brand exists at the intersection of natural wonder and human
          experience—and curiosity is the starting point.
        </p>
        <p>
          In our new series, Cards On The Table, we partnered with Academy Award
          nominated actor Stanley Tucci to host a series of dinner parties with the
          cultural icons who inspire us. Together, we dig into big ideas and let
          curiosity lead the way to connection.
        </p>
        <p>
          On the menu? Each course is paired with questions from our By Nature
          conversation cards, curated for the series by Dr. Orna Guralnik of Showtime’s
          Couple’s Therapy. From drinks to dessert, watch as stories are shared, truths
          are unearthed, and strangers become friends.
        </p>
      </div>
    </div>
    <Watch2/>
    </>
  );
};

export default Watch;
