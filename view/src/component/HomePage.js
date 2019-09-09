import React from 'react'


class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.checkAvailability = this.checkAvailability.bind(this);
    }

    checkAvailability(){
        window.location.href = "/detail";
    }


    render() {
    return (
      <div className="container-wrapper">
        <h1>Book A Bus</h1>
        <div className="base-form">
            <form className="form-wrapper">
                <div className="item-group"><label> Origin</label><select className="form-control" required=""><option value="Accra" >Accra</option><option value="Kumasi">Kumasi</option><option value="Tamale">Tamale</option></select></div>
                <div className="item-group"><label>Destination</label><select className="form-control" required=""><option value="Kumasi" >Kumasi</option><option value="Tamale">Tamale</option><option value="Accra">Accra</option></select></div><button className="btn btn-primary"
                                                                                                                                                                                                                                                                      type="button" onClick={this.checkAvailability} style={{marginTop:'35px', height:'25%'}}>Check Availability</button></form>
        </div>
    </div>
    );
  }
}

export default HomePage;
