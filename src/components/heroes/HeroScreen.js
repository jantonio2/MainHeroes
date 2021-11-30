import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { heroes } from '../../helpers/heroes';
import { HeroHeader } from './HeroHeader';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = heroes.find((hero) => {
    return hero.id === parseInt(heroId)
  });
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${hero.idMarvel}?apikey=df916cab83ad54facc657b52b6364191&ts=1&hash=f961e1bec1a1d07b819e447edeef3f07`)
      .then(res => {
        setPersonaje(res.data.data.results)
      })
      .catch(error => console.log(error))
  }, [hero.idMarvel]);

  console.log(personaje)
  return (
    <div>
      <HeroHeader />
      <div className="heroscreen__container">
        <div className="heroscreen__container-image">
          <img src={hero.image} alt="Hero" />
          {/* {
            loading ?
              (
                <div className = "alert alert-info text-center">
                  Loading...
                </div>
              )
            :
              (
              )
          } */}
        </div>
        <div className="heroscreen__container-comics">
          <h1>Soy un comic</h1>
        </div>
      </div>
    </div>
  );
};
