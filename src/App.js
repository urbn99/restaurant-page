import React from 'react'
import About from './components/About'
import Faq from './components/FAQ'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Navigation from './components/Navigation'
import Reservation from './components/Reservation'
import Slider from './components/Slider'

const App = () => {
  return (
    <>
      <Navigation/>
      <Slider />
      <About/>
      <Menu/>
      <Reservation/>
      <Faq/>
      <Footer/>
      
    </>
  )
}

export default App

