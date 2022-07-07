import React from 'react';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <footer className="flex items-center justify-between p-4 text-center text-white bg-nav">
        <div className="flex justify-center font-Prompt">
          <p className='text-xs md:ml-10 md:text-sm font-prompt'>Copyright - Guilhem Seyvet 2022</p>
        </div>
        <div className="flex items-center justify-around w-20 h-full mr-2 md:mr-10">
          <a
            href="https://www.linkedin.com/in/guilhem-seyvet/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" width={20} height={20} />
          </a>
          <a
            href="https://www.github.com/guilhemcv/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" width={20} height={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};
