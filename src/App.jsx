import './App.css'
import { Aboutus } from './components/Aboutus'
import { Applinks } from './components/Applinks'
import { Betterdeals } from './components/Betterdeals'
import { Companies } from './components/Companies'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { Tryservices } from './components/Tryservices'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Applinks />
      <Betterdeals />
      <Reviews />
      <Companies />
      <Tryservices />
      <Footer />
    </>
  )
}

export default App
