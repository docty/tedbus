import React, {Component} from 'react';



import SkeletonPack from "./SkeletonPack";
import Icon from '../Image/4.jpg';
import BookHeaderTab from './BookHeaderTab';


import $ from "jquery";
import Footer from './Footer';
 


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
