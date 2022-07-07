import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Components/Footer';
import NavAccueil from './Components/NavAccueil';

export const Home = () => {
  return (
    <div className='home'>
      <NavAccueil />
      <div className="w-11/12 p-0 mx-auto mt-12 md:p-5 rounded-xl opacity-80 bg-nav md:w-7/12">
        <section className="w-full ">
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-2 lg:px-10 max-w-7xl lg:py-24">
            <div className="flex w-full mx-auto text-left">
              <div className="relative inline-flex items-center mx-auto align-middle">
                <div className="text-center">
                  <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white font-Prompt md:text-5xl lg:text-6xl lg:max-w-7xl">
                    On va enfin pouvoir <br className="hidden lg:block" />
                    les occuper !
                  </h1>
                  <p className="max-w-xl mx-auto mt-8 mb-8 text-base leading-relaxed text-white font-Prompt">
                    Bienvenue sur la plateforme collaborative qui recense les aires de jeux en France !
                    Plus d'excuses, vous allez pouvoir occuper vos enfants et découvrir de nouvelles aires de jeux. Vous pourrez aussi partagez les aires proches de chez vous pour les faire découvrir aux autres utilisateurs ! 
                  </p>
                  <Link className='flex items-center justify-center w-48 h-10 mx-auto text-xl bg-white rounded-sm shadow-sm font-prompt text-nav'  to="/map">Let's go !</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
