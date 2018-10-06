import React, { Component } from 'react'

export class SermonSection extends Component {
  render() {
    return (
      <div>
            <section id='sermon-section'>
                <div className="container">
                    <div className="row">
                        <div className="col s6">

                            <div className="sermon-heading">

                                <h4>Love one <br />toward another</h4>
                                <span className="sermon-subtitle"> Pocatello Baptist Church 2018 Sermon Series </span>

                            </div>

                            <div className="sermon-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cum optio laudantium blanditiis asperiores dolore labore amet eos, aliquid nisi.</p>
                                <div className="sermon-button">
                                    <a href="#" className="btn-black"> Sermon Series</a>
                                </div>
                                <div className="sermon-button">
                                    <a href="#" className="btn-black "> All Sermons</a>
                                </div>
                            </div>

                        </div>

                        <div className="col s6 ">
                            <div className="sermon-image">

                            </div>
                        </div>
                    </div>
                </div>

            </section>
      </div>
    )
  }
}

export default SermonSection
