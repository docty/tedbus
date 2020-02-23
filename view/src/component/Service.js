import React, { Component } from 'react';
import ServiceHeaderTab from './ServiceHeaderTab';
import ServiceCategory from './ServiceCategory';
import Footer from './Footer';
/**
 * Service
 */
export class Service extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ServiceHeaderTab/>
        <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>Our Services</h1>
                <span>We are making travelling very easy and secure</span>
              </div>
            </div>
          </div>
        </div>
        <ServiceCategory/>
        <Footer/>
      </div>
    );
  }
}



export default Service;
