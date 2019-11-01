import React, {Component} from 'react';
import {connect} from 'react-redux';

class Summary extends Component {

    constructor(props){
        super(props);
        this.onNextItem = this.onNextItem.bind(this);

    }

    onNextItem(e){
        this.props.changeForm(e);
    }

    render() {
        return (

            <form className="detail-form">

                      <div>
                          <label>Full Name : {this.props.valueChange.surname + " " + this.props.valueChange.firstname}</label>  <br/>
                          <label>Contact : {this.props.valueChange.phonenumber}</label><br/>
                          <label>Email : {this.props.valueChange.email}  </label><br/>
                          <label>Bus : {this.props.bus}</label><br/>
                          <label>Bus Type </label><br/>
                          <label>Number of Passangers </label><br/>
                          <label>Luggage </label><br/>
                          <label>Date / Time </label><br/>
                          <label>Pickup point </label><br/>
                          <label>Price </label><br/>
                          <label>Payment Method </label><br/>
                          <label>Ticket Reference </label><br/>
                      </div>

                  <div className="btn-controllers">
                      <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('payment')}>BACK</button>
                      <button className="btn btn-primary float-right" type="button" >SUBMIT</button>
                  </div>
              </form>
        );
    }
}

export const mapStateToProps = (state) => {
  return {

        valueChange : state.personal.valueChange,
        bus : state.details.bus

      }
};

export default connect(mapStateToProps, null)(Summary);
