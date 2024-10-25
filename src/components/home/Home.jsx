import React from 'react'
import banner from '../../assets/home.png'
import m4 from '../../assets/m4.png'

const Home = () => {
  return (
    <div className=''>
      <img className='w-[97%] mx-auto escritorio' src={banner} alt="" />
      <img className='w-[98%] mx-auto movil' src={m4} alt="" />
    </div>
  )
}

export default Home
