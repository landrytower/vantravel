import './App.css'
import About from './Components/About/About'
import CTA from './Components/CTA/CTA'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
