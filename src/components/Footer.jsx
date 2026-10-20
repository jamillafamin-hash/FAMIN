import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer scrapbook-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CHICKEN NI DODONG ♡</h3>
          <p>A cute pink digital poultry e-commerce for quality chickens.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop Chickens</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Phone: (Edit as needed)</p>
          <p>Email: info@chicken-ni-dodong.com</p>
          <p>Address: (Edit as needed)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 CHICKEN NI DODONG. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
