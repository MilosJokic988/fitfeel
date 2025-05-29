import React from 'react';
import './Reference.css';

const programs = [
  {
    title: 'FitForma 30',
    description: 'Intenzivan 30-dnevni program za izgradnju snage, sagorevanje masti i poboljšanje kondicije. Idealno za početnike i one koji se vraćaju treningu.',
    duration: '30 dana',
    intensity: 'Srednji',
    price: '4.999 RSD'
  },
  {
    title: 'ZdravaLeđa',
    description: 'Specijalizovani program za jačanje leđa, ispravljanje držanja i ublažavanje bolova. Fokusiran na pravilne pokrete i stabilnost tela.',
    duration: '4 nedelje',
    intensity: 'Nizak do srednji',
    price: '3.999 RSD'
  }
];

const Program = () => {
  return (
    <div className="program-container">
      <h1 className="program-title">Naši Programi</h1>
      <div className="program-list">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <div className="program-info">
              <span><strong>Trajanje:</strong> {program.duration}</span>
              <span><strong>Intenzitet:</strong> {program.intensity}</span>
              <span><strong>Cena:</strong> {program.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
