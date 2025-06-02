import React from 'react';
import './About.css';
import { FaLocationArrow, FaDumbbell, FaUserAlt, FaHeartbeat } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">O Nama</h1>
      <div className="about-grid">
        <div className="about-card">
          <FaUserAlt className="about-icon" />
          <h2>Ko smo mi?</h2>
          <p>
            Trening centar <strong>FITFEEL</strong> osnovali su Maja i Siniša Borković — entuzijasti i zaljubljenici u trening i zdrav način života.
            Njihova misija je da pomognu ljudima da kroz pravilno vežbanje unaprede svoj izgled, zdravlje i kondiciju.
          </p>
        </div>

   <div className="about-card">
  <FaLocationArrow className="about-icon" />
  <h2>Gde se nalazimo?</h2>
  <p>
    Nalazimo se u ulici <strong>Maksima Gorkog 78</strong> (kod II Ekonomske škole) u prijatnom prostoru od <strong>100 m²</strong>
    koji pruža intimnu i motivišuću atmosferu za vežbanje.
  </p>
  <a
    href="https://www.google.com/maps/place/Maksima+Gorkog+78,+Beograd"
    target="_blank"
    rel="noopener noreferrer"
    className="location-button"
  >
    Pogledaj lokaciju
  </a>
</div>


        <div className="about-card">
          <FaDumbbell className="about-icon" />
          <h2>Zašto FEEL FIT?</h2>
          <p>
            Ono što nas izdvaja od drugih jeste posvećenost naših trenera. Naš tim je stručan, temeljan i iskreno posvećen vašem napretku.
            Uz dugogodišnje iskustvo i individualni pristup, potrudićemo se da svaki vaš dolazak bude ispunjen podrškom i rezultatom.
          </p>
        </div>

        <div className="about-card">
          <FaHeartbeat className="about-icon" />
          <h2>Vrste treninga</h2>
          <p>
            U ponudi imamo tri tipa treninga koji su prilagođeni vašim potrebama:
          </p>
          <ul>
            <li><strong>Pilates</strong> – za stabilnost, snagu i fleksibilnost</li>
            <li><strong>Trening u maloj grupi</strong> (6–8 vežbača) – timska podrška</li>
            <li><strong>Individualni trening</strong> – potpuno prilagođen vašim ciljevima</li>
          </ul>
        </div>

        <div className="about-card">
          <FaHeartbeat className="about-icon" />
          <h2>Naša filozofija</h2>
          <p>
            Verujemo da zdrav život nije krajnji cilj, već svakodnevno putovanje.
            <strong> Feel Fit</strong> je tu da vam pruži ravnotežu, snagu i samopouzdanje kroz kvalitetan pokret i ličnu podršku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
