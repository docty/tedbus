import React, { Component } from 'react';

/**
 * Personal
 */
export class Personal extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.caca = this.caca.bind(this);
  }

  caca(e){
    alert('ttt');
  }

  render() {
    return (
      <section>
        <div className="inner">
          <h3>
            Personal Information:
          </h3>
          <div className="form-row">
            <div className="form-holder">
              <label className="form-row-inner">
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  required/>
                <span className="label">
                  First Name*
                </span>
                <span className="border">
                </span>
              </label>
            </div>
            <div className="form-holder">
              <label className="form-row-inner">
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  required/>
                <span className="label">
                  Last Name*
                </span>
                <span className="border">
                </span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-holder">
              <label className="form-row-inner">
                <input
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  required/>
                <span className="label">
                  Phone Number*
                </span>
                <span className="border">
                </span>
              </label>
            </div>
            <div className="form-holder">
              <label className="form-row-inner">
                <input
                  type="text"
                  className="form-control"
                  id="email_address"
                  name="email_address"
                  required/>
                <span className="label">
                  Email Address*
                </span>
                <span className="border">
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

    );
  }
}


export default Personal;
