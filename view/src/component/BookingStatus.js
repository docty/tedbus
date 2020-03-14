import React from 'react'







class BookingStatus extends React.Component {

componentDidMount() {
  setTimeout(function () {
    window.location = '/';

  }, 5000);

}

  render() {

    return (
      <div style={{backgroundColor: '#D5D3BB', height: '800px', overflow: 'hidden'} }>
      <div style={{  display :'flex' , justifyContent: 'center', alignItems: 'center',
      }}>
        <p style={{marginTop: '80px',backgroundColor: '#7AC499', boxShadow:'2px 2px 3px #235D30', padding: '10px'}}>
          <p>Congratulation. Your Booking is Successful</p>
          <p>Redirecting in 5 seconds</p>
        </p>
    </div>
    </div>
    );
  }
}

export default BookingStatus;
