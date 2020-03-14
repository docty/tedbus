import React from 'react'
import $ from 'jquery';
import HeaderTab from './HeaderTab';
import MainBanner from './MainBanner';
import Features from './Features';
import Forts from './Forts';
import Footer from './Footer';



class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.checkAvailability = this.checkAvailability.bind(this);
        this.changeOrigin = this.changeOrigin.bind(this);
        this.changeDestination = this.changeDestination.bind(this);


    }

    checkAvailability(){
        window.location.href = "/detail";
    }
    changeOrigin(e){

        const regions = ['Accra', 'Kumasi'];
        let deduct =  regions.filter(region => {
            return region !== e.target.value;
        });
        let originalValue = $('#destination').val();
        $("#destination").empty();
        for (let i = 0; i < deduct.length; i++){
            $("#destination").append(new Option(deduct[i], deduct[i]));
        }
        $("#destination").val(originalValue);
    }

    changeDestination(e){

        const regions = ['Accra', 'Kumasi'];
        let deduct =  regions.filter(region => {
            return region !== e.target.value;
        });
        let originalValue = $('#origin').val();
        $("#origin").empty();
        for (let i = 0; i < deduct.length; i++){
            $("#origin").append(new Option(deduct[i], deduct[i]));
        }
        $("#origin").val(originalValue);
    }

    componentDidMount() {
        const regions = ['Accra', 'Kumasi'];
        for (let i = 0; i < regions.length; i++){
            $("#origin").append(new Option(regions[i], regions[i]));
        }
        for (let i = regions.length-1; i >= 0; i--){
            $("#destination").append(new Option(regions[i], regions[i]));
        }





    }


    render() {
    return (
        <div>

              <div id="preloader">
                  <div class="jumper">
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <HeaderTab/>
              <MainBanner/>
              <Features/>
              <div class="fun-facts">
                  <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                           <div class="left-content">
                             <span>TEDBUS</span>
                             <h2>Your safety ride is our <em> main priority</em></h2>
                             <p>TEDBUS is making travelling very easy and fast. We are always ready to ensure your safety journey. Never rush to the bus station for we just got you covered.
                             <br/><br/> Book a bus for an event, educational trip, excursion, vacation. You can book as an individual or as a group.</p>

                           </div>
                         </div>
                        <div class="col-md-6 align-self-center">
                            <div className="booking_home" id="booking_home">
                                <label  style={{color : 'black'}}> Origin</label>
                                <select id="origin" onChange={this.changeOrigin} className="form-control" required=""> </select>
                                <label style={{color : 'black'}}> Destination</label>
                                <select id="destination" onChange={this.changeDestination}  className="form-control" required=""> </select>
                                <button className="btn btn-primary" type="button" onClick={this.checkAvailability} style={{marginTop:'35px' , marginBottom: '20px'}}>Check Availability</button>
                            </div>
                        </div>
                   </div>
                 </div>
             </div>



            <hr/>
            <Forts/>
            <hr/>
            <Footer/>
        </div>
    );
  }
}

export default HomePage;

// <div className="container-wrapper">
//   <h1>Book A Bus</h1>
//   <div className="base-form">
//       <form className="form-wrapper">
//           <div className="item-group">
//               <label> Origin</label>
//               <select id="origin" onChange={this.changeOrigin} className="form-control" required=""> </select>
//           </div>
//           <div className="item-group">
//               <label>Destination</label>
//               <select id="destination" onChange={this.changeDestination}  className="form-control" required=""> </select>
//           </div>
//           <button className="btn btn-primary" type="button" onClick={this.checkAvailability} style={{marginTop:'35px', height:'25%'}}>Check Availability</button>
//       </form>
//   </div>
// </div>
