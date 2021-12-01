import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ComicCard } from './ComicCard';

export const ComicList = ({id}) => {

  const [comic, setComic] = useState([]);
  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=df916cab83ad54facc657b52b6364191&ts=1&hash=f961e1bec1a1d07b819e447edeef3f07&limit=100`)
      .then(res => {
        setComic(res.data.data.results)
      })
      .catch(error => console.log(error))
  }, [id]);

  console.log(comic[0])

  return (
    <div className="comiclist__container">
      {
        comic.map(com => com.description && (<ComicCard key={com.id} {...com} />))
      }
    </div>
  );
};
