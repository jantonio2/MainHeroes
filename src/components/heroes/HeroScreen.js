import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { heroes } from '../../helpers/heroes';
import { HeroHeader } from './HeroHeader';
import { ComicList } from './../comics/ComicList';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = heroes.find((hero) => {
    return hero.id === parseInt(heroId)
  });
  const [personaje, setPersonaje] = useState({});
  const [comic, setComic] = useState({});
  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${hero.idMarvel}?apikey=df916cab83ad54facc657b52b6364191&ts=1&hash=f961e1bec1a1d07b819e447edeef3f07`)
      .then(res => {
        setPersonaje(res.data.data.results[0])
      })
      .catch(error => console.log(error))
  }, [hero.idMarvel]);

  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${hero.idComic}/comics?apikey=df916cab83ad54facc657b52b6364191&ts=1&hash=f961e1bec1a1d07b819e447edeef3f07`)
      .then(res => {
        setComic(res.data.data)
      })
      .catch(error => console.log(error))
  }, [hero.idComic]);

  const thumb = {...personaje.thumbnail};
  return (
    <div>
      <HeroHeader />
      <div className="heroscreen__container animate__animated animate__fadeIn">
        <div className="heroscreen__container-image">
          <div className="heroscreen__container-card">
            <img src={`${thumb.path}.${thumb.extension}`} alt="Hero" />
            <div className="heroscreen__container-content">
              <h2>{personaje.name}</h2>
              <br />
              <p>{personaje.description}</p>
              <p><strong>Cantidad de apariciones: </strong>{comic.total}</p>
            </div>
          </div>
        </div>
        <div className="heroscreen__container-comics">
          <ComicList id={hero.idComic} />
        </div>
      </div>
    </div>
  );
};
