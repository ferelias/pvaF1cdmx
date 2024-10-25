import React from 'react'
import drop from '../../assets/drop.png'
import m8 from '../../assets/m8.png'

const Drop = () => {
  return (
    <div className='mt-[10px]'>
      <img className='w-[97%] mx-auto escritorio' src={drop} alt="" />
      <img className='w-[98%] mx-auto movil' src={m8} alt="" />
    </div>
  )
}

export default Drop
