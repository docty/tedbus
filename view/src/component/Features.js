import React from 'react'
import Luggage from '../images/luggage.jpg';
import Pickup from '../images/pickup.jpg';
import Wifi from '../images/wifi.jpg';

const Features = (props) => {
  return (
    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Benefit from <em>TedBus</em></h2>
              <span>TedBus is an online bus booking platform which allows users to primarily book for bus.</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={Luggage} alt=""/>
              <div class="down-content">
                <h4>Free Luggage</h4>
                <p>Tedbus will bear all your luggage charges. Carry as much as you can and we will serve you.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={Pickup} alt=""/>
              <div class="down-content">
                <h4>Preferred Pickup Point</h4>
                <p>We give our customers the choice to select their preferred pickup point. We make travelling very simple and fast.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={Wifi} alt=""/>
              <div class="down-content">
                <h4>Free WIFI</h4>
                <p>Stream your live videos with our free WIFI service. We ensure that your journey with TedBus is never boring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Features
