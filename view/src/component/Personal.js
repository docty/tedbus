import React, {Component} from 'react';
import Icon from '../Image/4.jpg';

class Personal extends Component {
    render() {
        return (
            <div className="detail-wrapper">
                <form className="detail-form">
                    <div className="detail-form-item">
                        <div><label>First Name</label><input className="form-control" type="text"/></div>
                        <div><label>Last Name</label><input className="form-control" type="text"/></div>
                    </div>
                    <div className="detail-form-item">
                        <div><label>Phone Number</label><input className="form-control" type="text"/></div>
                        <div><label>Email</label><input className="form-control" type="text"/></div>
                    </div>
                    <div className="btn-controllers">
                        <button className="btn btn-primary float-left" type="button">BACK</button>
                        <button className="btn btn-primary float-right" type="button">NEXT</button>
                    </div>
                </form>
                <div className="detail-image-holder"><img src={Icon} width="500px" height="350px" alt="Cannot load"/></div>
            </div>
        );
    }
}

export default Personal;