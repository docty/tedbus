import React, {Component} from 'react';
import Icon from '../Image/4.jpg';
//import $ from 'jquery';
import AwesomeSlider from 'react-awesome-slider';


class Details extends Component {



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
                            <div>
                                <label>Bus</label>
                                <select className="form-control">
                                <option value="vip" >VIP</option>
                                <option value="stc">STC</option>
                                <option value="mmt">M Express</option>
                            </select>
                            </div>
                            <div>
                                <label>Bus Type</label>
                                <select className="form-control" style={{width : '120px'}}>
                                <option value="asford" >Asford</option>
                                <option value="dalex">Dalex</option>
                                <option value="runbat">Runbat </option>
                            </select>
                            </div>
                            <div>
                                <label>Price</label>
                                <input className="form-control" type="text" disabled
                                                            placeholder="Default Price"/>
                            </div>
                        </div>
                        <div className="detail-form-item">
                            <div>
                                <label>Date</label>
                                <input className="form-control" placeholder="Select pickup date"/>
                            </div>
                            <div>
                                <label>Time</label>
                                <input className="form-control" placeholder="Select time"/>
                             </div>
                            <div>
                                <label>Pick up point</label>
                                <select className="form-control">
                                    <option value="am" >Asafo Market</option>
                                    <option value="ts">Tech Station</option>
                                </select>
                            </div>
                        </div>
                        <div className="detail-form-item">
                            <div className="detail-passengers"><label>Number of Passengers</label><select
                                className="form-control">
                                <option value="1"  >1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></div>
                            <div className="detail-luggage"><label>Luggage</label>
                                <div className="form-check"><input className="form-check-input" type="radio"
                                                                   name="luggage" id="formCheck-2"/><label
                                    className="form-check-label" htmlFor="formCheck-2">Yes</label></div>
                                <div className="form-check"><input className="form-check-input" type="radio"
                                                                   name="luggage" id="formCheck-3"/><label
                                    className="form-check-label" htmlFor="formCheck-3">No</label></div>
                            </div>
                        </div>
                        <div className="btn-controllers">
                            <button className="btn btn-primary float-left" type="button">BACK</button>
                            <button className="btn btn-primary float-right" type="button" onClick={() => this.onNextItem('personal')}>NEXT</button>
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