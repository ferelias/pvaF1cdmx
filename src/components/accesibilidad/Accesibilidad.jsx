import React from 'react'
import ux from '../../assets/ux.png';
import m1 from '../../assets/m1.png'

const Accesibilidad = () => {
  return (
    <div>
      <img className='w-[100%] mx-auto escritorio' src={ux} alt="" />
      <img className='w-[100%] mx-auto movil' src={m1} alt="" />
    </div>
  )
}

export default Accesibilidad
