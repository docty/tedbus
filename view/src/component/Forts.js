import React from 'react'
import Secured from '../Image/secured.png';
import Guarantee from '../Image/guarantee.jpg';
import Safety from '../Image/safety.jpg';

const Forts = (props) => {
  return (
    <div class="partners">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="owl-partners owl-carousel">

          <div class="partner-item">
            <img src={Secured} title="1" alt="1"/>
          </div>

          <div class="partner-item">
            <img src={Guarantee} title="2" alt="2"/>
          </div>

          <div class="partner-item">
            <img src={Safety} title="3" alt="3"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Forts
