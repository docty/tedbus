import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import $ from "jquery";
import {setBus, changePassenger, setBusType, setBusTime} from './../redux/action/index';

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
        const buses = ['VIP', 'STC', 'M3 Express'];
        const model = ['Asford', 'Dalex', 'Runbat'];
        for (let i = 0; i < buses.length; i++){
            $("#buses").append(new Option(buses[i], buses[i]));
        }
        for (let i = 0; i < model.length; i++){
            $("#buses_model").append(new Option(model[i], model[i]));
        }
        $('#price').val('GHC 55.00');

        }

    changeBus(e){
           let model;

           this.props.onSetBus(e);
            switch (e.target.value) {
                case 'VIP':
                       model = ['Asford', 'Dalex', 'Runbat'];
                       $('#price').val('GHC 55.00');

                       break;
                case 'STC':
                       model = ['Flat', 'Broad', 'Coach'];
                       $('#price').val('GHC 50.00');
                       break;
                case 'M3 Express':
                      model = ['Opener', 'Closed', 'Euro'];
                       $('#price').val('GHC 45.00');
                      break;
                default:
                      model = ['Asford', 'Dalex', 'Runbat'];
            }
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
                                <select className="form-control" id="buses" defaultValue={this.props.bus} onChange={this.changeBus}/>
                            </div>
                            <div>
                                <label>Bus Type</label>
                                <select className="form-control" style={{width: '120px'}} id="buses_model" onChange={(e) => this.props.onSetBusType(e.target.value)}/>
                            </div>
                            <div>
                                <label>Price</label>
                                <input className="form-control" type="text" disabled id="price" placeholder="Default Price"/>
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
                                <select className="form-control" onChange={(e) => this.props.onSetBusTime(e)}>
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
                                <select className="form-control">
                                    <option value="am" >Asafo Market</option>
                                    <option value="ts">Tech Station</option>
                                </select>
                            </div>
                        </div>
                        <div className="detail-form-item">
                            <div className="detail-passengers">
                                <label>Number of Passengers</label>
                                <select className="form-control" id="passengers_no" onChange={(e) => this.props.onChangePassenger(e)}>
                                    <option value="1"  >1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
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
      }
    }
};

export const mapStateToProps = (state) => {
  return {

        bus : state.details.bus,
        bustype : state.details.bustype,
        passengers : state.details.passengers,
        bustime : state.details.time
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(Details);
