import React, { Component } from 'react'

export class Ministries extends Component {
  render () {
    return (
      <div>
        <section id='main-content'>
          <div className='container'>
            <div className='row'>
              <div className=' col s12 m6'>
                <div className='image-main-content'>
                  <img
                    src=' https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    alt=''
                  />
                </div>
              </div>
              <div className='col s12 m6'>
                <div className='ministries-heading'>
                  <h5> Uncover our ministries</h5>
                  <p>

                        Pocatello baptist church has minisitry opportunities for
                        all ages. Please click below for detailed information
                        about the different minstries we support.
                      </p>
                </div>

                <div className='ministries-list'>
                  <ul>
                    <h5>List of our Ministries</h5>
                    <li>Set Free Teens</li>
                    <li>Pre-Teen </li>
                    <li>Peewee patch club</li>
                    <li>Soul Sister</li>
                    <li>Sitched together</li>
                    <li>Mens Bible Study</li>
                    <li>Womens Bible Study</li>
                    <li>Celebrate Recovery</li>
                  </ul>
                </div>

                <div className='image-main-button'>
                  <a href='ministries.html' className='btn-red'>
                        View Ministries <i className='fas fa-chevron-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Ministries
