// src/Footer.js
import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => (
  <footer className="footer">
    <p>Copyright &copy; {new Date().getFullYear()} by My Website</p>
  </footer>
);

export default Footer;
