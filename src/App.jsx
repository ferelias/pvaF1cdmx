import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import granPremio from './assets/granPremio.png'
import bLeft1 from './assets/BannerLeft1.png'
import bright1 from './assets/Bannerright1.png'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Accesibilidad from './components/accesibilidad/Accesibilidad'
import Acces from './components/acces/Acces'
import Tec from './components/tec/Tec'
import Maps from './components/maps/Maps'
import Store from './components/store/Store'
import Events from './components/events/Events'
import Drop from './components/drop/Drop'
import Ux from './components/ux/Ux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Menu/> */}
      <Accesibilidad/>
      <Ux/>
      <Events/>
      <Home/>
      <Acces/>
      <Maps/>
      <Store/>
      <Drop/>
      <Tec/>
      <div className='mt-[10px]'>
        <Accesibilidad/>
      </div>
    </>
  )
}

export default App
