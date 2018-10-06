import React, { Component } from 'react'

export class SixtySeconds extends Component {
  render() {
    return (
      <div>
            <section id='sixty-seconds'>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="sixty-seconds-heading">
                                <h4>60 Seconds to make a life changing decision:</h4>
                                <span>Are you sure?</span>
                            </div>
                            <div className="sixty-second-button">
                                <a href="#" class="btn-white">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
  }
}

export default SixtySeconds
