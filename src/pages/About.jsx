import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">O Nama</h1>
      <div className="about-content">
        <div className="about-box">
          <h2>Ko smo mi?</h2>
          <p>
            Mi smo Srdjan i Jelena, bračni par posvećen zdravlju, pokretu i telu.
            Više od <strong>10 godina</strong> zajedno treniramo i motivišemo druge
            da dostignu svoje ciljeve. Naša misija je jednostavna — pomoći ljudima
            da postanu najbolja verzija sebe.
          </p>
        </div>

        <div className="about-box">
          <h2>Naša filozofija</h2>
          <p>
            Verujemo da zdrav život nije cilj — već putovanje. Spoj discipline,
            pravilne ishrane, pokreta i podrške. Zato je <strong>FitFeel</strong>
            stvoren: da osetiš snagu, ravnotežu i unutrašnju moć kroz trening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
