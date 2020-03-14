import React from 'react'


const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-item">
            <h4>TedBus</h4>
            <p>Follow us on our social media platforms.</p>
            <ul className="social-icons">
              <li><a rel="nofollow" href="/facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/instagraam"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <ul className="menu-list">
            <li><a href="/Copyright"> Copyright © 2020</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-item">
            <h4>Our Services</h4>
            <ul className="menu-list">
              <li><a href="/Services">Individual Booking</a></li>
              <li><a href="/Services">Bulk Booking</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-item">
            <h4>Extras</h4>
            <ul className="menu-list">
              <li><a href="/about">About Us</a></li>

              <li><a href="/policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-item last-item">
            <h4>Contact Us</h4>
            <div className="contact-form">
              <form id="contact footer-contact" action="#" >
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
