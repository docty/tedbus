import React, {Component} from 'react';
import Details from "./Details";
import Personal from "./Personal";
import Payment from "./Payment";

class Skeleton extends Component {



    constructor(props){
        super(props);
        this.state = {
            property : 'detail'
        };
        this.SwapForm = this.SwapForm.bind(this);
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
                        <Details changeForm={this.SwapForm}/>
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
                        <Personal changeForm={this.SwapForm}/>
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
                        <Payment changeForm={this.SwapForm}/>
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