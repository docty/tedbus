import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setPaymentChange} from './../redux/action/index'
import Mtn from '../Image/mtn.jpg';


class Payment extends Component {



    constructor(props){
        super(props);
        this.onNextItem = this.onNextItem.bind(this);
        this.pay = this.pay.bind(this);
    }



    onNextItem(e){
        this.props.changeForm(e);
    }

pay(e){
    alert(e.target.value);
}
    render() {
        return (
              <form className="detail-form">
                     <div className="detail-form-item">
                        <div><label>Pay By</label>
                            <div className="form-check"><input className="form-check-input" checked = {true} onChange={this.pay} type="radio" id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1"><img src={Mtn} style={{width : '80px'}} alt="mtn mobile money"/></label></div>
                            <div className="form-check"><input className="form-check-input" type="radio" onChange={this.pay} id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1">Vodafone Cash</label></div>
                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1">AirtelTigo Cash</label></div>
                        </div>
                    </div>

                     
                    <div className="btn-controllers">
                        <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('personal')}>BACK</button>
                        <button className="btn btn-primary float-right" type="button" onClick={() => this.onNextItem('summary')}>NEXT</button>
                    </div>
                </form>

        );
    }
}

export const mapDispatchToProps = (dispatch) => {
  return {

      onPaymentChange : (e) => {
          dispatch(setPaymentChange(e))
      }
    }
};

export default connect(null, mapDispatchToProps)(Payment);
