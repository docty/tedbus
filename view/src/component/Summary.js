import React, {Component} from 'react';
import Icon from "../Image/4.jpg";
import AwesomeSlider from 'react-awesome-slider';

class Summary extends Component {
    render() {
        return (
            <div className="detail-wrapper">
                <h1>summary</h1>

                <AwesomeSlider className="detail-image-holder">
                    <div data-src={Icon} />
                    <div data-src={Icon} />
                    <div data-src={Icon} />
                </AwesomeSlider>
            </div>
        );
    }
}

export default Summary;