import React from 'react'
import { Link } from 'react-router-dom';
import './emailhome.css'
function emailhome() {
  return (
    <section className="emailhome-container">
      <h2 className="emailhome-heading">Want First Dibs?</h2>
      <p className="emailhome-description">
        Join our email list and be the first to know about new limited edition products, <br />
        material innovations, and lots of other fun updates.
      </p>

      <form className="emailhome-form">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          required
          className="emailhome-input"
        />
        <button type="submit" className="emailhome-button">
          SIGN UP
        </button>
      </form>

      <p className="emailhome-note">
        Note: You can opt-out at any time. See our
        <Link to="/Privacy" className="emailhome-link"> Privacy Policy</Link> and
        <Link to="/Treams" className="emailhome-link"> Terms</Link>.
      </p>
    </section>
  );
}

export default emailhome
