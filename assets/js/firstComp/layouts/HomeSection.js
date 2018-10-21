import React, { Component } from 'react'
import SermonSection from './SermonSection'
import CardSection from './CardSection'
import Ministries from './Ministries'
import SixtySeconds from './SixtySeconds'
import Events from './Events'

export class HomeSection extends Component {
  render () {
    return (
      <div>

        <section id='why-pbc'>

          <div className='greybox'>
            <h5 className='sub-title'> why pocatello  baptist </h5>
          </div>
          <div className='whitebox'>
            <p>Pocatello Baptist Church is a fundamental Independent, Baptist curch that exist to be a sanctuary where God is worshipped, a body where his Word is obeyed, a family where his disciples fellowship and a mission where sinners are
                        converted </p>
          </div>
        </section>

        <CardSection />
        <SermonSection />
        <Ministries />
        <SixtySeconds />
        <Events />
      </div>

    )
  }
}

export default HomeSection
