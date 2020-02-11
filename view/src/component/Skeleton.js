import React, {Component} from 'react';
import 'react-awesome-slider/dist/styles.css';
import Details from "./Details";
import Personal from "./Personal";
import Payment from "./Payment";
import Summary from "./Summary";
import SkeletonPack from "./SkeletonPack";
import Icon from '../Image/4.jpg';
import BookHeaderTab from './BookHeaderTab';

import Vip from '../Image/vip.jpg';
import Vip_2 from '../Image/vip_2.jpg';
import $ from "jquery";
import Footer from './Footer';
import AwesomeSlider from 'react-awesome-slider';


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
        return(
         <div>
             <BookHeaderTab/>
             <SkeletonPack/>
             <Footer/>


         </div>

    )}


}

export default Skeleton;
