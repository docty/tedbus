import React, { Component } from 'react';
import AboutHeaderTab from './AboutHeaderTab';
import Teammember from './Teammember';
import Footer from './Footer';
/**
 * About
 */
export class About extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AboutHeaderTab/>
        <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 style={{color: 'white'}}>About Us</h1>
                <span>Your safety ride is our main priority</span>
               </div>
            </div>
           </div>
        </div>
        <Teammember/>
        <Footer/>
      </div>
    );
  }
}



export default About;
