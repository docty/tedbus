import React from 'react'
import Service1 from '../images/single_service_01.jpg';
import Service2 from '../images/single_service_02.jpg';

const ServiceCategory = (props) => {
  return (
    <div class="single-services">
     <div class="container">
       <div class="row" id="tabs">
         <div class="col-md-4">
           <ul>
             <li><a href='#tabs-1'>Individual Booking<i class="fa fa-angle-right"></i></a></li>
             <li><a href='#tabs-2'>Bulk Booking<i class="fa fa-angle-right"></i></a></li>

           </ul>
         </div>
         <div class="col-md-8">
           <section class='tabs-content'>
             <article id='tabs-1'>
               <img src={Service1} alt=""/>
               <h4>Individual Booking</h4>
               <p>Tedbus gives its users the chance to make a bus reservation of their choice. Users can make reservation for themselves or a group or family. Your luggage charges will be waived by the company. We provide several pickup points where users can select from.
               <br/><br/> Enjoy your journey with Tedbus as we ensure your saftey and comfortability.</p>
             </article>
             <article id='tabs-2'>
               <img src={Service2} alt=""/>
               <h4>Bulk Booking</h4>
               <p>Tedbus is making the planning of your event, vacation trip, excursion and many more exciting and interesting in terms of securing a bus for your trip. Users can book a full bus for a program without going to any bus station.
               <br/><br/>.Make a request now for our clients are ready to assist you.</p>
             </article>
          </section>
         </div>
       </div>
     </div>
   </div>

  )
}

export default ServiceCategory
