import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';
import AboutHero from '../hero/AboutHero'
import Footer from '../layouts/Footer'


class AboutUs extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <AboutHero/>

      
      <Footer/>

           
      </div>
    );
  }
}

export default AboutUs
