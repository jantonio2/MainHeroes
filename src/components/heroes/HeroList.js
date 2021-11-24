import React from 'react'
import { heroes } from './../../helpers/heroes';
import { HeroCard } from './HeroCard';

export const HeroList = () => {
  return (
    <div className="hero-list__container">
      {
        heroes.map(hero =>
          <HeroCard 
            key={hero.id}
            {...hero}
          />
        )
      }
    </div>
  )
}
