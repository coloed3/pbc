import React, { Component } from 'react';






class Navbar extends Component {
    render() {
        return (
            <div>
                 <nav>
          <div className='nav-wrapper grey darken-3' >
            <a href='#'className='brand-logo' > Pocatello Baptist Church </a>
            <a href='#' data-target='mobile-demo'className='sidenav-trigger'data-target='mobile-links'> <i className='material-icons'> menu </i></a>
            <ul className='right hide-on-med-and-down'>
              <li > <a href='sass.html' > Home </a></li>
              <li > <a href='about.html' > About us </a></li>
              <li > <a href='collapsible.html' > Pastors Blog </a></li>
              <li> <a href='mobile.html' > 60 Seconds </a></li>
              <li> <a href='mobile.html' > Mission </a></li>
              <li > <a href='mobile.html' > Contact us </a></li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav'id='mobile-links' >
          <li> <a href='sass.html'> Home </a></li>
          <li> <a href='about.html'> About us </a></li>
          <li> <a href='collapsible.html'> Pastors Blog </a></li>
          <li> <a href='mobile.html'> 60 Seconds </a></li>
          <li> <a href='mobile.html'> Mission </a></li>
          <li> <a href='mobile.html'> Contact us </a></li>
        </ul>
            </div>
        );
    }
}

export default Navbar