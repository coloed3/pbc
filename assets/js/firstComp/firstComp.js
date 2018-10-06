import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import HomeSection from "./layouts/HomeSection"
import Header from './hero/Header'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'


class Layout extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Header />
        <HomeSection/>
        <Footer/>
      </div>
    )
  }
  }

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
