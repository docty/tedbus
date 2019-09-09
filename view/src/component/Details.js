import React, {Component} from 'react';
import Icon from '../Image/4.jpg';
import $ from 'jquery';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Details extends Component {




    componentDidMount() {
        $("#datepicker").val('henry');


    }




    render() {

        return (
            <div className="detail-wrapper">
                <form className="detail-form">
                    <div className="detail-form-item">
                        <div><label>Bus</label><select className="form-control">
                            <option value="vip" >VIP</option>
                            <option value="stc">STC</option>
                            <option value="mmt">Metro Mass Transit</option>
                        </select></div>
                        <div><label>Bus Type</label><select className="form-control">
                            <option value="vip" >VIP</option>
                            <option value="stc">STC</option>
                            <option value="mmt">Metro Mass Transit</option>
                        </select></div>
                        <div><label>Price</label><input className="form-control" type="text" disabled=""
                                                        placeholder="Default Price"/></div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Date</label>
                            <input type="text" className="form-control" id="datepicker"/>

                        </div>
                        <div><label>Time</label><select className="form-control">
                            <option value="vip" >VIP</option>
                            <option value="stc">STC</option>
                            <option value="mmt">Metro Mass Transit</option>
                        </select></div>
                        <div><label>Pick up point</label><select className="form-control">
                            <option value="vip" >VIP</option>
                            <option value="stc">STC</option>
                            <option value="mmt">Metro Mass Transit</option>
                        </select></div>
                    </div>
                    <div className="detail-form-item">
                        <div className="detail-passengers"><label>Number of Passengers</label><select
                            className="form-control">
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select></div>
                        <div className="detail-luggage"><label>Luggage</label>
                            <div className="form-check"><input className="form-check-input" type="radio" name="luggage"
                                                               id="formCheck-2"/><label className="form-check-label"
                                                                                        htmlFor="formCheck-2">Yes</label>
                            </div>
                            <div className="form-check"><input className="form-check-input" type="radio" name="luggage"
                                                               id="formCheck-3"/><label className="form-check-label"
                                                                                        htmlFor="formCheck-3">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-controllers">

                        <button className="btn btn-primary float-right" type="button">NEXT</button>
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

export default Details;