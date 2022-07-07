import React from 'react';
import logo from '../../assets/images/playground.png';

export const Marker = ({handleClick, zoom}) => {
  return (
    <div className=''>
      <img onClick={() => handleClick()} className='relative cursor-pointer bottom-5 right-5' src={logo} alt="" width="40px" />
    </div>
  );
};
