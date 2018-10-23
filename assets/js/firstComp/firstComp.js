import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Doctrinal from './pages/Doctrinal';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutUs} />
          <Route path="/doc" component={Doctrinal} />

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
