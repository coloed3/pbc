import React, { Component} from 'react'

class Header extends Component {
  render () {
    return (
      <div>
        <section id='header-image'>
          <div className='header-title'>
            <h1 className='header-h1'> Welcome to Pocatello Baptist Church</h1>
            <div className='header-subtitle'>
              <a className='waves-effect waves-light red darken-4 btn-large'> Are you searching? </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header
