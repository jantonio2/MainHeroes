import React from 'react'
import { useHistory } from 'react-router';

export const HeroHeader = () => {

  const history = useHistory();
  const handleHome = () => {
    history.replace('/');
  };

  return (
    <div className="header">
      <img 
        src="https://i.ibb.co/WPTNVFT/Logo-Marvel.png" 
        alt="Logo-Marvel" 
        border="0" 
        onClick={handleHome}  
      />
      <figure className="title">
      <img src="https://i.ibb.co/sCZ9KgW/T-tulo.png" alt="TItulo" border="0" />
      </figure>
    </div>
  );
};
