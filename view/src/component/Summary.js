import React, {Component} from 'react';


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
                  <div className="detail-form-item">
                      <div>
                          <label>Full Name </label><br/>
                          <label>Contact </label><br/>
                          <label>Email </label><br/>
                          <label>Bus </label><br/>
                          <label>Bus Type </label><br/>
                          <label>Number of Passangers </label><br/>
                          <label>Luggage </label><br/>
                          <label>Date / Time </label><br/>
                          <label>Pickup point </label><br/>
                          <label>Price </label><br/>
                          <label>Payment Method </label><br/>
                          <label>Ticket Reference </label><br/>
                      </div>
                  </div>
                  <div className="btn-controllers">
                      <button className="btn btn-primary float-left" type="button" onClick={() => this.onNextItem('payment')}>BACK</button>
                      <button className="btn btn-primary float-right" type="button" >SUBMIT</button>
                  </div>
              </form>
        );
    }
}

export default Summary;
