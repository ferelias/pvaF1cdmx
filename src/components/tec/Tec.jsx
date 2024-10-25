import React from 'react';
import tec from '../../assets/tec.png';
import m9 from '../../assets/m9.png';

const Tec = () => {
  return (
    <div className='mt-[10px]'>
      <img className='w-[97%] mx-auto escritorio' src={tec} alt="" />
      <img className='w-[98%] mx-auto movil' src={m9} alt="" />
    </div>
  )
}

export default Tec
