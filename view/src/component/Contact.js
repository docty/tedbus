import React, { Component, PropTypes } from 'react';
import ContactHeaderTab from './ContactHeaderTab';
import Footer from './Footer';
/**
 * Contact
 */
export class Contact extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <ContactHeaderTab/>
          <div class="page-heading header-text">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1>Contact Us</h1>
                  <span>feel free to send us a message now!</span>
                </div>
             </div>
           </div>
         </div>
         <div class="contact-information">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-item">
              <i class="fa fa-phone"></i>
              <h4>Phone</h4>
              <p>Give us a call for we are ready to assist you.</p>
              <a href="#">+233 553-479-020</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-item">
              <i class="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>Send us your comment and your request.</p>
              <a href="#">info@tedbus.com</a>
            </div>
          </div>

        </div>
      </div>
    </div>

        <Footer/>
      </div>
    );
  }
}



export default Contact;
