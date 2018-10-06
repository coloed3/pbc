import React, { Component } from 'react'

export class CardSection extends Component {
  render() {
    return (
      <div>
            <section id='card-section' className="center">

                <div className="row">
                    <div className="container">

                        <div className="col s12 m4">
                            <div className="icon"><i className="fas fa-bible "></i></div>
                            <div className="heading-title">
                                <h6 className="heading-title-h6">What we believe</h6>
                                <div className="heading-title-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores cupiditate earum mollitia ipsa ad possimus perferendis sequi, similique voluptate rem.</p>
                                </div>
                                <div className="heading-button">
                                    <a href="#" className=" btn-red ">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon"><i className="fas fa-globe-asia"></i></div>
                            <div className="heading-title">
                                <h6 className="heading-title-h6">Our Missionaries</h6>
                                <div className="heading-title-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores cupiditate earum mollitia ipsa ad possimus perferendis sequi, similique voluptate rem.</p>
                                </div>
                                <div className="heading-button">
                                    <a href="#" className="btn-red">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4 ">
                            <div className="icon"><i className="fas fa-podcast"></i></div>
                            <div className="heading-title">
                                <h6 className="heading-title-h6">Our Podcast</h6>
                                <div className="heading-title-content ">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores cupiditate earum mollitia ipsa ad possimus perferendis sequi, similique voluptate rem.</p>
                                </div>
                                <div className="heading-button">
                                    <a href="#" className="btn-red">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      </div>
    )
  }
}

export default CardSection
