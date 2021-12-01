import React from 'react';
import { useHistory } from 'react-router-dom';

export const HeroCard = (hero) => {
  
  const history = useHistory();

  const handleHeroClick = () => {
    console.log('Hola');
    history.push(`/hero/${hero.id}`);
  };

  return (
    <div className="hero-card__container">
      <div>
        <img src={hero.image} alt="HeroImg" onClick={handleHeroClick} />
      </div>
      <h3>{hero.name}</h3>
    </div>
  );
};
