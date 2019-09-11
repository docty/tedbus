import React, {Component} from 'react';
import Icon from '../Image/4.jpg';

class Payment extends Component {



    constructor(props){
        super(props);
        this.onNextItem = this.onNextItem.bind(this);
    }

    componentDidMount() {
        //$("#datepicker").val('henry');


    }

    onNextItem(e){
        this.props.changeForm(e);
    }

    render() {
        return (
            <div className="detail-wrapper">
                <form className="detail-form">
                    <div className="detail-form-item">
                        <div><label>Pay By</label>
                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1">MTN Mobile Money</label></div>
                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1">Vodafone Cash</label></div>
                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" name="cash"/><label className="form-check-label" htmlFor="formCheck-1">AirtelTigo Cash</label></div>
                        </div>
                    </div>
                    <div className="btn-controllers">
                        <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('personal')}>BACK</button>
                        <button className="btn btn-primary float-right" type="button">NEXT</button>
                    </div>
                </form>
                <div className="detail-image-holder"><img src={Icon} width="500px" height="350px" alt="error loading"/></div>
            </div>
        );
    }
}

export default Payment;