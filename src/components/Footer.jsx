import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a className="social-link" href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a className="social-link" href="https://www.youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
      <a className="social-link" href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
      <a className="social-link" href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </footer>
  );
};

export default Footer;
