import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setValueChange} from './../redux/action/index'
import cookie from 'react-cookies';
import $ from "jquery";

class Personal extends Component {


    constructor(props){
        super(props);
        this.onNextItem = this.onNextItem.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onUserExit  = this.onUserExit.bind(this);
        this.onUserNonExit  = this.onUserNonExit.bind(this);
    }

    onUserExit(){
        if (cookie.load('tedbus_surname') !== "") {
            $('#surname').val(cookie.load('tedbus_surname'));
            $('#firstname').val(cookie.load('tedbus_firstname'));
            $('#contact').val(cookie.load('tedbus_contact'));
            $('#email').val(cookie.load('tedbus_email'));
        }
    }

    onUserNonExit(){
        $('#surname').val('');
        $('#firstname').val('');
        $('#contact').val('');
        $('#email').val('');
    }

    onValueChange(e){

        this.props.onValueChange(e);
    }


    onNextItem(e){
        this.props.changeForm(e);
    }


    render() {
        return (

                <form className="detail-form">
                    <div style={{paddingBottom:'4%'}}>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={() => this.onUserExit()}  type="radio" name="identity"  id="formCheck-2" />
                                <label   className="form-check-label" htmlFor="formCheck-2">An Existing User</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={() => this.onUserNonExit()}  name="identity" id="formCheck-3"   />
                                <label className="form-check-label" htmlFor="formCheck-3">I am a new User</label>
                            </div>
                        </div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Surname</label><input className="form-control" type="text" defaultValue={this.props.valueChange.surname} placeholder="Enter surname" onChange={this.onValueChange} name="surname" id="surname"/></div>
                        <div><label>First & Other Name</label><input className="form-control" type="text" defaultValue={this.props.valueChange.firstname} placeholder="Enter first & other name" onChange={this.onValueChange} name="firstname" id="firstname"/></div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Phone Number</label><input className="form-control" type="text" defaultValue={this.props.valueChange.phonenumber} placeholder="Enter phone number" onChange={this.onValueChange} name="phonenumber" id="contact"/></div>
                        <div><label>Email Address</label><input className="form-control" type="text" defaultValue={this.props.valueChange.email} placeholder="Enter email address" onChange={this.onValueChange} name="email" id="email"/></div>
                    </div>
                    <div className="btn-controllers">
                        <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('detail')}>BACK</button>
                        <button className="btn btn-primary float-right" type="button" onClick={() => this.onNextItem('payment')}>NEXT</button>
                    </div>
                </form>


        );
    }
}

export const mapDispatchToProps = (dispatch) => {
  return {

      onValueChange : (e) => {
          dispatch(setValueChange(e))
      }
    }
};

export const mapStateToProps = (state) => {
  return {

        valueChange : state.personal.valueChange,

      }
};


export default connect(mapStateToProps, mapDispatchToProps)(Personal);
