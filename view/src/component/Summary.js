import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import uuidv4  from 'uuid/v4';
import cookie from 'react-cookies'

class Summary extends Component {

    constructor(props){
        super(props);
        this.onNextItem = this.onNextItem.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onNextItem(e){
        this.props.changeForm(e);
    }

    componentDidMount() {
        this.setState({
              userId: cookie.load('firstname')
        });

        //console.log(this.state.userId);
    }

    formRequest(uuid){
        axios.post('http://localhost:8100/api/requestform',{
          userId : uuid,
          surname: this.props.valueChange.surname,
          firstname : this.props.valueChange.firstname,
          contact: this.props.valueChange.phonenumber,
          email : this.props.valueChange.email
        })
          .then(function (response){
              alert(response);
          })
          .catch( function (error){
            // Describe error!
          });

    }

    busRequest(uuid){
        axios.post('http://localhost:8100/api/bus_identity',{
          userId : uuid,
          busname: this.props.bus,
          bustype : this.props.bustype,
          price: this.props.price,
          date : this.props.year+'-'+this.props.month+'-'+this.props.day,
          time : this.props.bustime,
          pip : this.props.pickup,
          nop : this.props.passengers,
          luggage : !this.props.luggage === true ? 'Yes' : 'No'
        })
          .then(function (response){
              //alert(response);
          })
          .catch( function (error){
            // Describe error!
          });
    }

    saveToCookie(){
        cookie.save("tedbus_firstname" , this.props.valueChange.firstname, { path: '/' });
        cookie.save("tedbus_surname" , this.props.valueChange.surname, { path: '/' })
        cookie.save("tedbus_contact" , this.props.valueChange.phonenumber, { path: '/' })
        cookie.save("tedbus_email" , this.props.valueChange.email, { path: '/' })
    }
    onFormSubmit(){
        let uuid = uuidv4();
        let message = 'Thank you \n ' + this.props.valueChange.firstname + '\n for booking from Tedbus. \n Reference Id is 035c ' + uuid ;
        this.formRequest(uuid);
        this.busRequest(uuid);
        this.saveToCookie();
        alert(message)

    }

    render() {
        return (

            <form className="detail-form">

                      <div>
                          <label>Full Name : {this.props.valueChange.surname + " " + this.props.valueChange.firstname}</label>  <br/>
                          <label>Contact : {this.props.valueChange.phonenumber}</label><br/>
                          <label>Email : {this.props.valueChange.email}  </label><br/>
                          <label>Bus : {this.props.bus}</label><br/>
                          <label>Bus Type : {this.props.bustype} </label><br/>
                          <label>Number of Passangers :  {this.props.passengers}</label><br/>
                          <label>Luggage : {!this.props.luggage === true ? 'Yes' : 'No'} </label><br/>
                          <label>Date / Time :   {this.props.year} - {this.props.month} - {this.props.day} / {this.props.bustime}</label><br/>
                          <label>Pickup point : {this.props.pickup} </label><br/>
                          <label>Price : GHC {this.props.price} </label><br/>
                          <label>Payment Method  : {this.props.payby}</label><br/>
                          <label>Ticket Reference </label><br/>
                      </div>

                  <div className="btn-controllers">
                      <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('payment')}>BACK</button>
                      <button className="btn btn-primary float-right" type="button" onClick={() => this.onFormSubmit()}>SUBMIT</button>
                  </div>
              </form>
        );
    }
}

export const mapStateToProps = (state) => {
  return {

        valueChange : state.personal.valueChange,
        bus : state.details.bus,
        passengers : state.details.passengers,
        bustype : state.details.bustype,
        year : state.details.date.year,
        month : state.details.date.month,
        day : state.details.date.day,
        bustime : state.details.time,
        luggage : state.details.luggage,
        pickup : state.details.pickup,
        price : state.details.price,
        payby : state.payment.payby
      }
};

export default connect(mapStateToProps, null)(Summary);
