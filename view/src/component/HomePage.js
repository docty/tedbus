import React from 'react'
import $ from 'jquery';

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
      <div className="container-wrapper">
        <h1>Book A Bus</h1>
        <div className="base-form">
            <form className="form-wrapper">
                <div className="item-group"><label> Origin</label><select id="origin" onChange={this.changeOrigin} className="form-control" required=""> </select></div>
                <div className="item-group"><label>Destination</label><select id="destination" onChange={this.changeDestination}  className="form-control" required=""> </select></div><button className="btn btn-primary"
                                                                                                                                                                                                                                                                      type="button" onClick={this.checkAvailability} style={{marginTop:'35px', height:'25%'}}>Check Availability</button></form>
        </div>
    </div>
    );
  }
}

export default HomePage;
