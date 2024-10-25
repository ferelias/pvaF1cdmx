import React from 'react'
import events from '../../assets/events.png'
import m3 from '../../assets/m3.png'

const Events = () => {
  return (
    <div className='mt-[10px]'>
      <img className='w-[97%] mx-auto escritorio' src={events} alt="" />
      <img className='w-[99%] mx-auto movil' src={m3} alt="" />
    </div>
  )
}

export default Events
