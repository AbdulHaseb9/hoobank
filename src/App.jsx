import './App.css'
import { Aboutus } from './components/Aboutus'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
    </>
  )
}

export default App
