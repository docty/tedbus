import React from 'react'
import $ from 'jquery';
import Secured from '../Image/secured.png';
import Guarantee from '../Image/guarantee.jpg';
import Safety from '../Image/safety.jpg';
import Late from '../Image/late.jpg';

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

        const regions = ['Accra', 'Kumasi', 'Sunyani'];
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

        const regions = ['Accra', 'Kumasi', 'Sunyani'];
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
        const regions = ['Accra', 'Kumasi', 'Sunyani'];
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
            <div className="container_body">
                <h1 className="welcome_message">WELCOME TO TEDBUS</h1>
                <h6>Enjoy your journey with us as we ensure your safety</h6>
                <h6>Do you want to </h6>
                <ul className="item_intro">
                    <li>Book For Individual</li>
                    <li>Book For Event</li>
                    <li>Know The Bus You Board</li>
                </ul>
                <a  className="btn_book" type="button" href="#booking_home">BOOK NOW</a>
            </div>
            <div className="row banner_1_1">
                <div className="col-lg-6">
                    <h4>TedBus is an online bus booking platform which allows users to primarily book for bus.</h4>
                    <img className="banner1_image" src={Secured} alt="secured"  />
                    <img className="banner1_image_small" src={Guarantee} alt="secured"  />
                    <img className="banner1_image" src={Safety} alt="secured"  />
                </div>
                <div className="col-lg-6">
                    <h4> Features</h4>
                    <ul className="feature">
                        <li>Free Luggage</li>
                        <li>Easy Booking</li>
                        <li>Preferred Pickup Point</li>
                        <li>Special Bonus For New Users</li>
                        <li>100% Saftey And Comfortability</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row banner_1_2">
                <div className="col-lg-6" style={{fontFamily: 'Myanmar Text', fontWeight: 'bold'}}>
                    <h5>TedBus</h5>
                    <p style={{color : 'black', padding : 0}}>Your safety ride is our main priority </p>
                    <p >Never Rush To The Bus Station.</p>
                    <p >With TedBus, Your Journey Is Covered</p>
                    <img src={Late} className="banner1_image_big" alt="Late"/>
                </div>
                <div className="col-lg-6 " id="booking_home">
                    <h5>Book From Here</h5>
                    <div className="booking_home">
                        <label> Origin</label>
                        <select id="origin" onChange={this.changeOrigin} className="form-control" required=""> </select>
                        <label> Destination</label>
                        <select id="destination" onChange={this.changeDestination}  className="form-control" required=""> </select>
                        <button className="btn btn-primary" type="button" onClick={this.checkAvailability} style={{marginTop:'35px' , marginBottom: '20px'}}>Check Availability</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row footer">
                <div className="col-lg-4">
                    <h5>Address</h5>
                    <h6>Location : <span className="footer_item">Ayeduase </span> </h6>
                    <h6>Contact : <span className="footer_item"> +233 553 4790</span></h6>
                    <h6>Email : <span className="footer_item"> support@tedbus.com </span></h6>
                    <h6><span className="footer_item"> © 2019 </span></h6>
                </div>
                <div className="col-lg-4">
                    <h5>Contact</h5>
                    <h6>Name : <span className="footer_item">Eric Heckford Bryan </span> </h6>
                    <h6>Contact : <span className="footer_item"> +233 553 4790</span></h6>
                    <h6>Email : <span className="footer_item"> bryaneric9000@gmail.com </span></h6>
                    <h6>Position :<span className="footer_item"> Founder </span></h6>
                </div>
                <div className="col-lg-4">
                    <h5>Services</h5>
                    <h6>Individual Booking </h6>
                    <h6>Bulk Booking </h6>
                </div>
            </div>
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
