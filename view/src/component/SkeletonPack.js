import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
/**
 * SkeletonPack
 */
export class SkeletonPack extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div class="page-content" style={{backgroundImage: "url('images/wizard-v3.jpg')"}}>
   <div class="wizard-v3-content">
     <div class="wizard-form">
       <div class="wizard-header">
         <h3 class="heading">Book With TedBus</h3>

       </div>
           <form class="form-register" action="#" method="post">
             <div id="form-total">

                 <h2>
                   <span class="step-icon"><i class="zmdi zmdi-account"></i></span>
                   <span class="step-text">Booking</span>
                 </h2>
                 <section>
                     <div class="inner">
                        <h3>Booking Details:</h3>
                        <div class="form-row form-row-date form-row-date-1">
                          <div class="form-holder form-holder-2">
                            <select name="bus" id="bus">
                              <option value="Month" disabled selected>Bus</option>
                              <option value="Vip">VIP</option>
                              <option value="Stc">STC</option>
                              <option value="2mexpress">2M EXPRESS</option>

                            </select>
                            <select name="year_1" id="year_1">
                              <option value="Year" disabled selected>Year</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                            </select>
                            <div class="form-row">
                              <div class="form-holder form-holder-2">
                                <label class="form-row-inner">
                                  <input type="text" name="price" id="price" class="form-control" required/>
                                  <span class="label">Price</span>
                                  <span class="border"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row form-row-date form-row-date-1">
                            <label>Date</label>
                            <DatePicker className="form-control" name="startDate"/>
                            <select name="time" id="time">
                              <option value="Year" disabled selected>Year</option>
                              <option value="2017">03:00</option>
                              <option value="2016">05:00</option>
                              <option value="2015">07:00</option>
                              <option value="2014">11:00</option>
                              <option value="2013">14:00</option>
                              <option value="2012">16:00</option>
                              <option value="2011">19:00</option>
                              <option value="2010">22:00</option>
                            </select>
                        </div>
                      </div>
                 </section>

                 <h2>
                   <span class="step-icon"><i class="zmdi zmdi-lock"></i></span>
                   <span class="step-text">Personal</span>
                 </h2>
                 <section>
                     <div class="inner">
                       <h3>Personal Information:</h3>
                       <div class="form-row">
                          <div class="form-holder">
                   <label class="form-row-inner">
                     <input type="text" class="form-control" id="first_name" name="first_name" required/>
                     <span class="label">First Name*</span>
                       <span class="border"></span>
                   </label>
                          </div>
                          <div class="form-holder">
                   <label class="form-row-inner">
                     <input type="text" class="form-control" id="last_name" name="last_name" required/>
                     <span class="label">Last Name*</span>
                       <span class="border"></span>
                   </label>
                          </div>
                        </div>
                      <div class="form-row">
                       <div class="form-holder">
                         <label class="form-row-inner">
                           <input type="text" class="form-control" id="phone_number" name="phone_number" required/>
                           <span class="label">Phone Number*</span>
                             <span class="border"></span>
                         </label>
                       </div>
                       <div class="form-holder">
                         <label class="form-row-inner">
                           <input type="text" class="form-control" id="email_address" name="email_address" required/>
                           <span class="label">Email Address*</span>
                             <span class="border"></span>
                         </label>
                       </div>
                      </div>
                    </div>
                 </section>

                 <h2>
                   <span class="step-icon"><i class="zmdi zmdi-card"></i></span>
                   <span class="step-text">Payment</span>
                 </h2>
                 <section>
                     <div class="inner">
                       <h3>Payment Information:</h3>
                       <div class="form-row">
                         <div class="form-holder form-holder-2">
                           <input type="radio" name="radio1" id="pay-1" value="pay-1" checked/>
                           <label class="pay-1-label" for="pay-1"><img src="images/wizard_v3_icon_1.png" alt="pay-1"/>Credit Card</label>
                   <input type="radio" name="radio1" id="pay-2" value="pay-2"/>
                   <label class="pay-2-label" for="pay-2"><img src="images/wizard_v3_icon_2.png" alt="pay-2"/>Paypal</label>
                         </div>
                       </div>
                       <div class="form-row">
                 <div class="form-holder form-holder-2">
                   <label class="form-row-inner">
                     <input type="text" class="form-control" id="holder" name="holder" required/>
                     <span class="label">Holder Name*</span>
                       <span class="border"></span>
                   </label>
                 </div>
               </div>
                       <div class="form-row">
                 <div class="form-holder">
                   <label class="form-row-inner">
                     <input type="text" class="form-control" id="card" name="card" required/>
                     <span class="label">Card Number*</span>
                     <span class="border"></span>
                   </label>
                 </div>
                 <div class="form-holder">
                   <label class="form-row-inner">
                     <input type="text" class="form-control" id="cvc" name="cvc" required/>
                     <span class="label">CVC*</span>
                     <span class="border"></span>
                   </label>
                 </div>
               </div>
                  <div class="form-row form-row-date form-row-date-1">
                   <div class="form-holder form-holder-2">
                   <label for="date" class="special-label">Expiry Date*:</label>
                   <select name="month_1" id="month_1">
                     <option value="Month" disabled selected>Month</option>
                     <option value="Feb">Feb</option>
                     <option value="Mar">Mar</option>
                     <option value="Apr">Apr</option>
                     <option value="May">May</option>
                   </select>
                   <select name="year_1" id="year_1">
                     <option value="Year" disabled selected>Year</option>
                     <option value="2017">2017</option>
                     <option value="2016">2016</option>
                     <option value="2015">2015</option>
                     <option value="2014">2014</option>
                     <option value="2013">2013</option>
                   </select>
                 </div>
               </div>
             </div>
                 </section>

                 <h2>
                   <span class="step-icon"><i class="zmdi zmdi-receipt"></i></span>
                   <span class="step-text">Confirm</span>
                 </h2>
                 <section>
                     <div class="inner">
                       <h3>Confirm Details:</h3>
                       <div class="form-row table-responsive">
                 <table class="table">
                   <tbody>
                     <tr class="space-row">
                       <th>Full Name:</th>
                       <td id="fullname-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>Email Address:</th>
                       <td id="email-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>Phone Number:</th>
                       <td id="phone-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>User:</th>
                       <td id="username-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>Gender:</th>
                       <td id="gender-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>Address:</th>
                       <td id="address-val"></td>
                     </tr>
                     <tr class="space-row">
                       <th>Card Type:</th>
                       <td id="pay-val">Credit Card</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
                 </section>
             </div>
           </form>
     </div>
   </div>
 </div>

    );
  }
}



export default SkeletonPack;
