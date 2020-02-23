import React from 'react'


const Booking = (props) => {
  return (
    <section>
        <div className="inner">
           <h3>Booking Details:</h3>
           <div id="date-selection" className = "row">
               <div className = "col-md-6">
                 <input type="text" placeholder="Departure date" className="form-control" name="dates" id="d-dates" data-select="datepicker"/>
               </div>
               <div className = "col-md-6">
                 <select name="d-time" id="d-time" className="form-control">
                 <option value="Time" disabled selected>Time</option>
                 <option value="03:00">03:00</option>
                 <option value="05:00">05:00</option>
                 <option value="07:00">07:00</option>
                 <option value="11:00">11:00</option>
                 <option value="14:00">14:00</option>
                 <option value="16:00">16:00</option>
                 <option value="19:00">19:00</option>
                 <option value="22:00">22:00</option>
                 </select>
               </div>
           </div>
           <div className="form-row ">
             <div className="form-holder form-holder-2 row">
               <div className="col-md-6">
                 <label>Bus Type </label>
                 <select placeholder = "Bus" name="d-bus" id="d-bus">
                   <option value="Bus" disabled selected>Bus</option>
                   <option value='VIP'>VIP</option>
                   <option value='STC'>STC</option>
                   <option value='2M Express'>2M EXPRESS</option>
                 </select>
               </div>
               <div className = "col-md-6">
                 <label>Number of passengers </label>
                 <input type="text" defaultValue = "1" className="form-control" id="d-passengers" name="d-passengers" />
               </div>
             </div>
           </div>
           <div className="form-row ">
             <div className="form-holder form-holder-2 row">
                <label>Pickup Point </label>
                 <select placeholder = "Bus" name="d-pickup" id="d-pickup">
                   <option value="null" disabled selected>Pickup Point</option>
                   <option value="Asafo Station">Asafo Station</option>
                   <option value="Tech Junction">Tech Junction</option>
                 </select>
             </div>
           </div>
           <div className="form-row">
              <div id="radio">
             <label>Luggage*: </label>
             <input type="radio"  name="luggage" value="Yes"  className="radio-1"/> Yes
             <input type="radio" name="luggage" value="No" checked/> No
           </div>
           </div>
       </div>
   </section>
  )
}

export default Booking
