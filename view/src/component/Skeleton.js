import React, {Component} from 'react';
import 'react-awesome-slider/dist/styles.css';
import Details from "./Details";
import Personal from "./Personal";
import Payment from "./Payment";
import Summary from "./Summary";
import Icon from '../Image/4.jpg';
import Vip from '../Image/vip.jpg';
import Vip_2 from '../Image/vip_2.jpg';
import $ from "jquery";
import AwesomeSlider from 'react-awesome-slider';
import 'react-datepicker/dist/react-datepicker.css';

class Skeleton extends Component {



    constructor(props){
        super(props);
        this.state = {
            property : 'detail',
            buses : 'Vip'
        };
        this.SwapForm = this.SwapForm.bind(this);
    }

    componentDidMount() {
        $('#image_src_1').attr('data-src', 'Vip');
    }


    SwapForm(e){
        this.setState({
            property : e
        })
    }



    render() {

        switch (this.state.property) {

            case 'detail':
                return (
                    <div>
                        <div className="d-flex flex-row justify-content-between detail-header">
                            <h4 className="float-left active-item">Details</h4>
                            <h4 className="float-left">Personal</h4>
                            <h4 className="float-left">Payment</h4>
                            <h4>Summary</h4>
                        </div>
                        <div className="detail-wrapper">
                            <Details changeForm={this.SwapForm}/>
                            <AwesomeSlider className="detail-image-holder">
                                    <div data-src={Icon} />
                                    <div data-src={Vip} />
                                    <div data-src={Vip_2} />
                                </AwesomeSlider>
                        </div>

                    </div>
                );
            case 'personal':
                return (
                    <div>
                        <div className="d-flex flex-row justify-content-between detail-header">
                            <h4 className="float-left ">Details</h4>
                            <h4 className="float-left active-item">Personal</h4>
                            <h4 className="float-left">Payment</h4>
                            <h4>Summary</h4>
                        </div>
                        <div className="detail-wrapper">
                            <Personal changeForm={this.SwapForm}/>
                            <AwesomeSlider className="detail-image-holder">
                                        <div data-src={Icon} />
                                        <div data-src={Vip} />
                                        <div data-src={Vip_2} />
                                    </AwesomeSlider>
                        </div>
                    </div>
                );
            case 'payment':
                return (
                    <div>
                        <div className="d-flex flex-row justify-content-between detail-header">
                            <h4 className="float-left ">Details</h4>
                            <h4 className="float-left ">Personal</h4>
                            <h4 className="float-left active-item">Payment</h4>
                            <h4>Summary</h4>
                        </div>
                        <div className="detail-wrapper">
                            <Payment changeForm={this.SwapForm}/>
                            <AwesomeSlider className="detail-image-holder">
                                            <div data-src={Icon} />
                                            <div data-src={Vip} />
                                            <div data-src={Vip_2} />
                                        </AwesomeSlider>
                        </div>
                    </div>
                );
            case 'summary':
                return (
                    <div>
                        <div className="d-flex flex-row justify-content-between detail-header">
                            <h4 className="float-left ">Details</h4>
                            <h4 className="float-left ">Personal</h4>
                            <h4 className="float-left">Payment</h4>
                            <h4 className="active-item">Summary</h4>
                        </div>
                        <div className="detail-wrapper">
                            <Summary changeForm={this.SwapForm} />
                            <AwesomeSlider className="detail-image-holder">
                                <div data-src={Icon} />
                                <div data-src={Vip} />
                                <div data-src={Vip_2} />
                            </AwesomeSlider>
                        </div>
                    </div>
                );
            default :
                return (
                    <div>
                        <div className="d-flex flex-row justify-content-between detail-header">
                            <h4 className="float-left active-item">Details</h4>
                            <h4 className="float-left">Personal</h4>
                            <h4 className="float-left">Payment</h4>
                            <h4>Summary</h4>
                        </div>
                        <Details changeForm={this.SwapForm}/>
                    </div>
                );

        }


    }


}

export default Skeleton;
