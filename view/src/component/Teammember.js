import React from 'react'
import Henry from '../Image/asiedu.png';
import Eric from '../Image/eric.jpg';

const Teammember = (props) => {
  return (
    <div class="team">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="section-heading">
           <h2>Our team <em>members</em></h2>

         </div>
       </div>
       <div class="col-md-4">
         <div class="team-item">
           <img src={Eric} alt=""/>
           <div class="down-content">
             <h4>Eric Heckford Bryan</h4>
             <span>Co-Founder</span>
             <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
           </div>
         </div>
       </div>
       <div class="col-md-4">
         <div class="team-item">
           <img src={Henry} alt=""/>
           <div class="down-content">
             <h4>Henry Asiedu</h4>
             <span>Software Engineer</span>
             <p>It seems a bit challenging to build what you imagine. Developing Tedbus has always been my dream.</p>
           </div>
         </div>
       </div>
       <div class="col-md-4">
         <div class="team-item">
           <img src="assets/images/team_03.jpg" alt=""/>
           <div class="down-content">
             <h4>Joe Doe</h4>
             <span>Financial Analyst</span>
             <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

  )
}

export default Teammember
