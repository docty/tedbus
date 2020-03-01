import React, { Component } from 'react';
import Booking from './Booking';
import Personal from './Personal';
import Payment from './Payment';
import Summary from './Summary';
/**
 * SkeletonPack
 */
 class SkeletonPack extends Component { // eslint-disable-line react/prefer-stateless-function



  render() {
    return (
      <div className="page-content" style={{backgroundImage: "url('images/wizard-v3.jpg')"}}>
        <div className="wizard-v3-content">
          <div className="wizard-form">
            <div className="wizard-header">
              <h3 className="heading">Book With TedBus</h3>
            </div>
            <form className="form-register"  method="post">
              <div id="form-total">

                 <h2>
                   <span className="step-icon"><i className="zmdi zmdi-account"></i></span>
                   <span className="step-text">Booking</span>
                   </h2>
                 <Booking/>
                 <h2>
                   <span className="step-icon"><i className="zmdi zmdi-lock"></i></span>
                   <span className="step-text">Personal</span>
                 </h2>
                 <Personal/>
                 <h2>
                   <span className="step-icon"><i className="zmdi zmdi-card"></i></span>
                   <span className="step-text">Payment</span>
                 </h2>
                 <Payment/>
                 <h2>
                   <span className="step-icon"><i className="zmdi zmdi-receipt"></i></span>
                   <span className="step-text">Confirm</span>
                 </h2>
                 <Summary/>
             </div>
             </form>
          </div>
        </div>
       </div>

    );
  }
}





export default SkeletonPack;
