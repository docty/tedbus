import React from 'react'


const Summary = (props) => {
  return (
    <section>
      <div className="inner">
        <h3>
          Confirm Details:
        </h3>
        <div className="form-row table-responsive">
          <table className="table">
            <tbody>
              <tr className="space-row">
                <th>
                  Full Name:
                </th>
                <td id="fullname-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>
                  Email Address:
                </th>
                <td id="email-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>
                  Phone Number:
                </th>
                <td id="phone-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>
                  Departure Date:
                </th>
                <td id="departure-date-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>Time:</th>
                <td id="departure-time-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>Bus:</th>
                <td id="departure-bus-val">
                </td>
              </tr>
              <tr className="space-row">
                <th>
                  Pickup Point:
                </th>
                <td id="departure-pickup-val">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}

export default Summary
