import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "New Utility Collection: Explore-Ready Features On Your Fave Sneaks Shop Men | Shop Women",
    "Free Shipping On Orders Over $75. Easy Returns."
  ];

  const toggleMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="top-navbar">
      <p>{messages[messageIndex]}</p>
      <span className="arrow-icon" onClick={toggleMessage}>&gt;</span>
    </div>
  );
};

export default Nav;

