import React from 'react';
import './Store.css'; 

function Store() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.688738738473!2d75.14828220895299!3d27.616141429413002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4cc70bff155%3A0x67d3756e74cf4749!2sCADD%20Centre%20CNC%2FWeb%20Development%20Institute%20in%20Sikar!5e1!3m2!1sen!2sin!4v1747196866502!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CADD Centre Map"
      ></iframe>
      <input
        type="text"
        placeholder="Search location..."
        className="search-box"
      />
    </div>
  );
}

export default Store;
