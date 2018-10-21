import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeSection from './layouts/HomeSection';
import Header from './hero/Header';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Doctrinal from './pages/Doctrinal';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <HomeSection />
        <Footer />
        <Doctrinal />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
