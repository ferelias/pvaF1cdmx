import React from 'react'
import store from '../../assets/store.png'
import m7 from '../../assets/m7.png'

const Store = () => {
  return (
    <div className='mt-[10px]'>
      <img className='w-[97%] mx-auto escritorio' src={store} alt="" />
      <img className='w-[97%] mx-auto movil' src={m7} alt="" />
    </div>
  )
}

export default Store
