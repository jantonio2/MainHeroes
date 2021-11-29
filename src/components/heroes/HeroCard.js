import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeroScreen } from './HeroScreen';

export const HeroCard = (hero) => {
  
  const history = useHistory();

  const handleHeroClick = () => {
    history.push(<HeroScreen {...hero} />)
    console.log('Hola');
  };

  return (
    <div className="hero-card__container">
      <img src={hero.image} alt="HeroImg" onClick={handleHeroClick} />
    </div>
  );
};
