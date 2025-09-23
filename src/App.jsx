import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import CytologicalFeatures from "./components/CytologicalFeatures"
import Hero from './components/Hero'


function App() {

  return (
    <>
    <Header />
    <Hero/>
    {/* <CytologicalFeatures /> */}
    <Footer />
    </>
  )
}

export default App;
