import React from 'react'
import { Link } from 'react-router-dom';
import './emailhome.css'
function emailhome() {
  return (
    <section className="newsletter-container">
      <h2 className="newsletter-heading">Want First Dibs?</h2>
      <p className="newsletter-description">
        Join our email list and be the first to know about new limited edition products, <br />
        material innovations, and lots of other fun updates.
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          required
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">
          SIGN UP
        </button>
      </form>

      <p className="newsletter-note">
        Note: You can opt-out at any time. See our
        <Link to="" className="newsletter-link"> Privacy Policy</Link> and
        <Link to="" className="newsletter-link"> Terms</Link>.
      </p>
    </section>
  );
}

export default emailhome
