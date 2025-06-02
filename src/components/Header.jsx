import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pro-header">
      <div className="header-inner">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Ubaci logo sliku iz public/images */}
          <img 
            src="/images/logo.png"  // Pretpostavljam da je logo.png ime tvoje slike
            alt="FitFeel Logo" 
            style={{ height: '40px', marginRight: '8px' }} 
          />
          FitFeel
        </Link>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Početna</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>O nama</Link>
          <Link to="/reference" onClick={() => setMenuOpen(false)}>Program</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
