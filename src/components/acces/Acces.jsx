import React from 'react'
import acces from '../../assets/acces.png'
import m5 from '../../assets/m5.png'

const Acces = () => {
  return (
    <div className='mt-[10px]'>
      <img className='w-[97%] mx-auto escritorio' src={acces} alt="" />
      <img className='w-[97%] mx-auto movil' src={m5} alt="" />
    </div>
  )
}

export default Acces
