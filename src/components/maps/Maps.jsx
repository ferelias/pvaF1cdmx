import React from 'react'
import maps from '../../assets/maps.png'
import gif from '../../assets/mapaGif.gif'
import locaciones from '../../assets/locaciones.png'
import m6 from '../../assets/m6.png'

const Maps = () => {
  return (
    <div className='mt-[10px] w-[97%] mx-auto maps h-[898px] flex justify-around'>
      <div className='w-[40%] mt-[220px] escritorio'>
        <img  src={locaciones} alt="" />
      </div>
      <div className='w-[40%] mt-[120px] escritorio'>
        <img src={gif} alt="" />
      </div>
      <img className='w-[97%] mx-auto movil' src={m6} alt="" />
    </div>
  )
}

export default Maps
