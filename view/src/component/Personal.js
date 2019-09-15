import React, {Component} from 'react';
import Icon from '../Image/4.jpg';
import AwesomeSlider from 'react-awesome-slider';



class Personal extends Component {






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
                    <div style={{paddingBottom:'4%'}}>
                        <div >
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="identity" id="formCheck-2"/>
                                <label   className="form-check-label" htmlFor="formCheck-2">Use previous details</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="identity" id="formCheck-3"  />
                                <label className="form-check-label" htmlFor="formCheck-3">I am a new User</label>
                            </div>
                        </div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Surname</label><input className="form-control" type="text" placeholder="Enter surname"/></div>
                        <div><label>First & Other Name</label><input className="form-control" type="text" placeholder="Enter first & other name"/></div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Phone Number</label><input className="form-control" type="text" placeholder="Enter phone number"/></div>
                        <div><label>Email Address</label><input className="form-control" type="text" placeholder="Enter email address"/></div>
                    </div>
                    <div className="btn-controllers">
                        <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('detail')}>BACK</button>
                        <button className="btn btn-primary float-right" type="button" onClick={() => this.onNextItem('payment')}>NEXT</button>
                    </div>
                </form>

                <AwesomeSlider className="detail-image-holder">
                    <div data-src={Icon} />
                    <div data-src={Icon} />
                    <div data-src={Icon} />
                </AwesomeSlider>
            </div>
        );
    }
}

export default Personal;