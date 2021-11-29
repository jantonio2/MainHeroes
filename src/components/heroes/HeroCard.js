import React from 'react';

export const HeroCard = ({id, idMarvel, name, image}) => {
  return (
    <div className="hero-card__container">
      <img src={image} alt="HeroImg" />
    </div>
  );
};
