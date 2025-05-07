// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3 className="footer-heading">SAS-conding</h3>
          <p className="footer-description">
            A platform for learning and practicing coding interview questions.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        {/* <div className="footer-section footer-links">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <Link to="/about" className="footer-link">About Us</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/careers" className="footer-link">Careers</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/terms" className="footer-link">Terms of Service</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section footer-links">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <Link to="/articles" className="footer-link">Articles</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/cheatsheets" className="footer-link">Cheat Sheets</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/videos" className="footer-link">Videos</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/practice" className="footer-link">Practice</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/contests" className="footer-link">Contests</Link>
            </li>
          </ul>
        </div>
         */}

        <div className="footer-section newsletter">
          <h3 className="footer-heading">Subscribe</h3>
          <p className="newsletter-description">
            Stay updated with the latest problems, contests, and courses.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
          <p className="newsletter-disclaimer">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} SAS-Coding. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;

