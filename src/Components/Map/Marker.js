import React from 'react';
import logo from '../../assets/images/playground.png';

export const Marker = ({handleClick}) => {
  return (
    <div className='pb-20'>
      <img onClick={() => handleClick()} className='cursor-pointer' src={logo} alt="" width="40px" />
    </div>
  );
};
