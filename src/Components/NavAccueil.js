import React from 'react';
import playground from '../assets/images/playground.png'
import { Link } from 'react-router-dom';

 const NavAccueil = () => {
  return (
    <div className="flex flex-col items-center justify-between w-auto h-32 pt-5 text-white md:flex-row md:pt-0 md:h-16 bg-nav">
      <div className="flex items-center justify-center md:ml-2 md:ml-5">
        <img src={playground} alt="jeu" width={40} height={40} />
        <p className="ml-2 font-prompt">Trouve ton parc</p>
      </div>
      <div className="flex items-center justify-around md:mr-5 md:w-96">
        <Link className='flex items-center h-12 px-3 font-prompt hover:rounded-sm hover:text-nav hover:bg-white hover:shadow-sm' to="/">Accueil</Link>
        <Link className='flex items-center h-12 px-3 font-prompt hover:rounded-sm hover:text-nav hover:bg-white hover:shadow-sm' to="/map">Carte</Link>
        <a className='flex items-center h-12 px-3 font-prompt hover:rounded-sm hover:text-nav hover:bg-white hover:shadow-sm' href="https://www.cognitoforms.com/GuilhemSEYVET/PartageTonAireDeJeux" target="_blank" rel="noreferrer">Ajouter un parc</a>
      </div>
    </div>
  );
};

export default NavAccueil;