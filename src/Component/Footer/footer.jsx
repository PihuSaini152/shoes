 import React from 'react';
import './footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Usa from '/footer/usa.jpg';
import Canda from '/footer/canada.jpg';
import Us from '/footer/australian.jpg';
import Eg from '/footer/england.jpg';
import China from '/footer/china.jpg';
import Jp from '/footer/japan.jpg';
import Sk from '/footer/south koria.jpg';
import Uae from '/footer/UAE.jpg';
import Unkow from '/footer/unknown.jpg';
import Ger from '/footer/german.jpg';
import Lux from '/footer/luxamberg.jpg';
import Eu from '/footer/EU.jpg';
import Ind from '/footer/india.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Help</h4>
          <p>1-888-963-8944</p>
          <p>1-814-251-9966 (Text)</p>
          <p>help@allbirds.com</p>
          <p>Returns/Exchanges</p>
          <p>FAQ/Contact Us</p>
          <p>Afterpay</p>
          <p>hello</p>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>
          <p>Men's Apparel</p>
          <p>Women's Apparel</p>
          <p>Socks</p>
          <p>Gift Cards</p>
          <p>Refer a Friend</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <p>Our Stores</p>
          <p>Our Story</p>
          <p>Our Materials</p>
          <p>Sustainability</p>
          <p>Investors</p>
          <p>Shoe Care</p>
          <p>Affiliates</p>
          <p>Bulk Orders</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Responsible Disclosure</p>
          <p>California Transparency Act</p>
          <p>Community Offers</p>
          <p>Our Blog</p>
          <p>Patents</p>
        </div>
      </div>

      <div className="footer-follow-flags">
        <div className="footer-follow">
          <h4>Follow the Flock</h4>
          <p>
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild.
            Oh, we have cute sheep, too. #allbirds
          </p>
          <div className="footer-socials">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-flags">
          <img src={Usa} alt="USA" />
          <img src={Canda} alt="Canada" /> 
          <img src={Us} alt="Australia" />
          <img src={Eg} alt="England" />
          <img src={China} alt="China" />
          <img src={Jp} alt="Japan" />
          <br />
          <img src={Sk} alt="South Korea" />
          <img src={Uae} alt="UAE" />
          <img src={Unkow} alt="Unknown" />
          <img src={Ger} alt="Germany" />
          <img src={Lux} alt="Luxembourg" />
          <img src={Eu} alt="EU" />
          <img src={Ind} alt="India" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
        <p>Do Not Sell My Personal Information</p>
      </div>
    </footer>
  );
};

export default Footer;
