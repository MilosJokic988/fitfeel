import React from 'react';
import './Contact.css';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-container">
        <h1 className="contact-title">Kontakt</h1>

        <div className="contact-info">
          <div>
            <h4>Email</h4>
            <p>office@fittfeel.rs</p>
          </div>
          <div>
            <h4>Telefon</h4>
            <p>+381 11 123 456</p>
          </div>
          <div>
            <h4>Adresa</h4>
            <p>Vojvode Stepe 123, Beograd</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Vaše ime" required />
          <input type="email" placeholder="Vaš email" required />
          <textarea placeholder="Vaša poruka" rows="4" required />
          <button type="submit">Pošalji</button>
        </form>

        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
