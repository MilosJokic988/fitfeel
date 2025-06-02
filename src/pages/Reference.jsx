import React, { useState } from 'react';
import './Reference.css';

const programs = [
  {
    title: 'Pilates',
    description: (
      <>
        <p><strong>Ostvari ravnotežu tela i uma.</strong></p>
        <p>
          Pilatesom dobijaš fizičku i mentalnu stabilnost, snagu, opuštenost i gipkost. 
          Izgradićeš telo na potpuno drugačiji način – bez agresivnih i napornih vežbi.
        </p>
        <p>
          Tvorac ovog sistema vežbi je Jozef Pilates – atleta koji je inspiraciju crpeo iz joge i zena.
        </p>
        <p><strong>Preporučuje se:</strong></p>
        <ul>
          <li>Vežbačima koji vole mirniji trening</li>
          <li>Onima sa sedentarnim stilom života</li>
          <li>Osobama sa problemima posturalnog statusa</li>
        </ul>
      </>
    ),
    duration: 'Utorak i četvrtak u 20:00, subota u 10:00',
    intensity: 'Nizak do srednji',
    price: '4.000 RSD mesečno'
  },
  {
    title: 'Personalni Trening',
    description: (
      <>
        <p><strong>Tvoj lični trener – motivacija i rezultati.</strong></p>
        <p>
          Uz personalni trening, dobijaš program po meri i konstantnu motivaciju. 
          Saveti o ishrani dodatno ubrzavaju rezultate.
        </p>
        <p><strong>Šta dobijaš:</strong></p>
        <ul>
          <li>Trening prilagođen ciljevima</li>
          <li>Potpuna posvećenost</li>
          <li>Redukcija težine i povećanje mišićne mase</li>
          <li>Pravilno izvođenje vežbi</li>
          <li>Rehabilitacija uz stručni nadzor</li>
        </ul>
      </>
    ),
    duration: 'Po dogovoru sa trenerom',
    intensity: 'Individualno prilagođen',
    price: 'Cena u dogovoru sa trenerom'
  },
  {
    title: 'Fitnes u Maloj Grupi',
    description: (
      <>
        <p><strong>Fokus, podrška i zajedništvo.</strong></p>
        <p>
          Trening u grupi od 6–8 ljudi omogućava više pažnje, bolju motivaciju i raznovrsne vežbe.
        </p>
        <p><strong>Prednosti:</strong></p>
        <ul>
          <li>Više za vaš novac</li>
          <li>Podrška grupe</li>
          <li>Personalizovan pristup</li>
          <li>Efikasni rezultati</li>
        </ul>
      </>
    ),
    duration: 'Ponedeljak, Sreda i Petak: 9:00, 18:00, 19:00 i 20:00',
    intensity: 'Srednji',
    price: '5 termina – 3.000 RSD / 10 termina – 4.500 RSD'
  }
];



const ProgramCard = ({ program }) => {
  const [showMore, setShowMore] = useState(false);

  // Skraćeni prikaz prikazuje samo prve 2 stavke (npr. dva <p>)
  const shortDescription = React.Children.toArray(program.description.props.children).slice(0, 2);

  return (
    <div className="program-card">
      <h2>{program.title}</h2>

      {/* Opis programa sa klasama za kontrolu prikaza */}
      <div className={`program-description ${showMore ? 'expanded' : 'collapsed'}`}>
        {showMore ? program.description : shortDescription}
      </div>

      {/* Dugme za prikazivanje/sklapanje teksta */}
      <button className="toggle-button" onClick={() => setShowMore(prev => !prev)}>
        {showMore ? 'Prikaži manje' : 'Prikaži više'}
      </button>

      {/* Informacije o trajanju, intenzitetu i ceni */}
      <div className="program-info">
        <span><strong>Trajanje:</strong> {program.duration}</span>
        <span><strong>Intenzitet:</strong> {program.intensity}</span>
        <span><strong>Cena:</strong> {program.price}</span>
      </div>
    </div>
  );
};

const Program = () => {
  return (
    <div className="program-container">
      <div className="program-list">
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Program;
