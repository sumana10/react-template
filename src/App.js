import React from 'react'
import About from './About';
import Contact from './Contact';
import Copyright from './Copyright';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';
import "./style.css";

const App = () =>{
  return(
    <div>
    <Navbar/>
    <HeroSection/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    <Copyright/>
    <PortfolioModal/>
    </div>
  )
}
export default App;