import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=3FKQTKLQBB6PS&source=url&ssrt=1682226197471" target="_blank" rel="noopener noreferrer" className="donate-link">Donate</a>
      </div>
    </footer>
  );
}

export default Footer;
