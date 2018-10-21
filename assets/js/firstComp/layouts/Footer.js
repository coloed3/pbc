import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
      <p className="person"></p>
        <section id='footer'>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col s12 m6">
                  <div className="footer-heading">
                    <h4>Pocatello Baptist Church</h4>

                  </div>
                  <div className="footer-subheading">
                    <ul className="address">
                      <li><i className="fas fa-map-marker-alt"></i> Address: 190 W. Chapel Rd, Pocatello ID 83201</li>
                      <li><i className="fas fa-phone"></i> phone: 208-237-4915 </li>
                      <li><i className="fas fa-comment-alt"></i> text: 208-254-1178</li>
                      <li><i className="fas fa-envelope"></i> Email: pocatellobaptist@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="footer-heading">
                    <h4>Service Times</h4>

                  </div>

                  <div className="footer-subheading">
                    <ul className="left">
                      <li>Sunday Services:</li>
                      <li>Sunday School 9:00 am</li>
                      <li>Sunday Main Service 10:00</li>
                      <li>Sunday Eveniing 5:00 pm</li>
                    </ul>
                    <ul className="right">
                      <li>Wednesday Night:</li>
                      <li>Adult Prayer 7:00pm</li>
                      <li>Set Free 7:00pm</li>
                      <li>PeeWee Patch club 7:00pm</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="footer-heading">
                    <h4 className="footer-h4">Stay Connected</h4>
                  </div>
                  <div className="footer-icon">
                    <ul className="footer-inline">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>

      </div>
    )
  }
}

export default Footer
