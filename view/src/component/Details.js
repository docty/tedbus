import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import $ from "jquery";
import {setBus, changePassenger, setBusType, setBusTime, changeLuggage, changePickup,
setPrice} from './../redux/action/index';

class Details extends Component {



        constructor(props){
            super(props);
            this.onNextItem = this.onNextItem.bind(this);

            this.handleChange = this.handleChange.bind(this);
            this.changeBus = this.changeBus.bind(this);
            this.state = {
                startDate: new Date()

            };
        }

    componentDidMount() {
        // const buses = ['VIP', 'STC', '2M Express'];
        // const model = ['', 'Asford', 'Dalex', 'Runbat'];
        // for (let i = 0; i < buses.length; i++){
        //
        //     $("#buses").append(new Option(buses[i], buses[i]));
        //
        // }
        // for (let i = 0; i < model.length; i++){
        //     $("#buses_model").append(new Option(model[i], model[i]));
        // }


        }

    changeBus(e){
           let model;

           this.props.onSetBus(e);
           let busPrice = '0';
            switch (e.target.value) {
                case 'VIP':
                       model = ['Asford', 'Dalex', 'Runbat'];
                       busPrice = '55.00';
                       break;
                case 'STC':
                       model = ['Flat', 'Broad', 'Coach'];
                       busPrice = '50.00';
                       break;
                case '2M Express':
                      busPrice = '45.00';
                      model = ['Opener', 'Closed', 'Euro'];
                      break;
                default:
                      busPrice = '55.00';
                      model = ['Asford', 'Dalex', 'Runbat'];
            }

            this.props.onSetPrice(busPrice);
            $('#buses_model').empty();
            this.props.onSetBusType(model[0]);
        for (let i = 0; i < model.length; i++){
            $("#buses_model").append(new Option(model[i], model[i]));
        }
    }




    onNextItem(e){
         this.props.changeForm(e);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }




    render() {

        return (

                    <form className="detail-form">
                        <div className="detail-form-item">
                            <div>
                                <label>Bus</label>
                                <select className="form-control" id="buses" defaultValue={this.props.bus}  onChange={(e) => this.changeBus(e)}>
                                    <option disabled selected={true}>Select A Bus</option>
                                    <option value='VIP'>VIP</option>
                                    <option value='STC'>STC</option>
                                    <option value='2M Express'>2M Express</option>
                                </select>
                            </div>
                            <div>
                                <label>Bus Type</label>
                                <select className="form-control" defaultValue={this.props.bustype} disabled={this.props.bus === '' ? true : false } style={{width: '120px'}} id="buses_model" onChange={(e) => this.props.onSetBusType(e.target.value)}/>
                            </div>
                            <div>
                                <label>Price</label>
                                <input className="form-control" type="text" disabled id="price" placeholder="Default Price" value={'GHC ' +  this.props.price}/>
                            </div>
                        </div>
                        <div className="detail-form-item">
                            <div>
                                <label>Date</label>
                                <DatePicker className="form-control"
                                    selected={ this.state.startDate }
                                    onChange={ this.handleChange }
                                    name="startDate"

                                />
                            </div>
                            <div>
                                <label>Time</label>
                                <select className="form-control" defaultValue={this.props.bustime} onChange={(e) => this.props.onSetBusTime(e)}>
                                    <option value="null">Select Your Time</option>
                                    <option value="04 : 00">04 : 00</option>
                                    <option value="06 : 00">06 : 00</option>
                                    <option value="09 : 00">09 : 00</option>
                                    <option value="12 : 00">12 : 00</option>
                                    <option value="14 : 00">14 : 00</option>
                                    <option value="16 : 00">16 : 00</option>
                                    <option value="19 : 00">19 : 00</option>
                                    <option value="21 : 00">21 : 00</option>
                                </select>
                             </div>
                            <div>
                                <label>Pick up point</label>
                                <select className="form-control" defaultValue={this.props.pickup} onChange={(e) => this.props.onChangePickup(e)}>
                                    <option value="null">Select Your Pickup Point</option>
                                    <option value="Asafo Market"  >Asafo Market</option>
                                    <option value="Tech Station">Tech Station</option>
                                </select>
                            </div>
                        </div>
                        <div className="detail-form-item">
                            <div className="detail-passengers">
                                <label>Number of Passengers</label>
                                <select className="form-control" defaultValue={this.props.passengers} id="passengers_no" onChange={(e) => this.props.onChangePassenger(e)}>
                                    <option value="1"  >1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="detail-luggage"><label>Luggage</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" onChange={() => this.props.onChangeLuggage()} name="luggage" id="formCheck-2" checked={!this.props.luggage}/>
                                    <label className="form-check-label" htmlFor="formCheck-2">Yes</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" onChange={() => this.props.onChangeLuggage()} name="luggage" id="formCheck-3" checked={this.props.luggage}   />
                                    <label className="form-check-label" htmlFor="formCheck-3">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-controllers">

                            <button className="btn btn-primary float-right" type="button" onClick={() => this.onNextItem('personal')}>NEXT</button>
                        </div>
                    </form>





         );
    }
}

export const mapDispatchToProps = (dispatch) => {
  return {

      onSetBus : (e) => {
          dispatch(setBus(e))
      },
      onChangePassenger : (e) => {
          dispatch(changePassenger(e))
      },
      onSetBusType : (e) => {
          dispatch(setBusType(e));
      },
      onSetBusTime : (e) => {
          dispatch(setBusTime(e));
      },
      onChangeLuggage : () => {
          dispatch(changeLuggage());
      },
      onChangePickup : (e) => {
          dispatch(changePickup(e));
      },
      onSetPrice : (e) => {
          dispatch(setPrice(e));
      }
    }
};

export const mapStateToProps = (state) => {
  return {

        bus : state.details.bus,
        bustype : state.details.bustype,
        passengers : state.details.passengers,
        bustime : state.details.time,
        luggage : state.details.luggage,
        pickup : state.details.pickup,
        price : state.details.price
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(Details);
