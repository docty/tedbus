import React, { Component } from 'react';
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
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Contact Us</h1>
                  <span>feel free to send us a message now!</span>
                </div>
             </div>
           </div>
         </div>
         <div className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <h4>Phone</h4>
              <p>Give us a call for we are ready to assist you.</p>
              <p style={{fontWeight: '600', color:'#a4c639', fontSize: '15px'}}>+233 553-479-020</p>
              <p style={{fontWeight: '600', color:'#a4c639', fontSize: '15px'}}>+233 247-049-416</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>Send us your comment and your request.</p>
              <p style={{fontWeight: '600', color:'#a4c639', fontSize: '15px'}}>info@tedbus.com</p>
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
