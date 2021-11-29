import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeroScreen } from './HeroScreen';

export const HeroCard = (hero) => {
  
  const history = useHistory();

  const handleHeroClick = () => {
    console.log('Hola');
    history.push(`/hero/${hero.id}`);
  };

  return (
    <div className="hero-card__container">
      <img src={hero.image} alt="HeroImg" onClick={handleHeroClick} />
    </div>
  );
};
