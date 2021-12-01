import React from 'react';

export const ComicCard = ({ thumbnail, title, description }) => {
  return (
    <div className="comiccard__container">
      <div className="comiccard__container-side front">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="comic"/>
      </div>
      <div className="comiccard__container-side back">
        <h3>{title}</h3>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
};
