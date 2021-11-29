import React from 'react';
import { useParams } from 'react-router';
import { heroes } from '../../helpers/heroes';
import { HeroHeader } from './HeroHeader';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = heroes.find((hero) => {
    return hero.id === parseInt(heroId)
  });

  console.log(hero);
  return (
    <div>
      <HeroHeader />
      <div className="heroscreen__container">
        <div className="heroscreen__container-image">
          <img src={hero.image} alt="Hero" />
        </div>
        <div className="heroscreen__container-comics">
          <h1>Soy un comic</h1>
        </div>
      </div>
    </div>
  );
};
