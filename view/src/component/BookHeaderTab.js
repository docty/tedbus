import React from 'react'


const BookHeaderTab = (props) => {
  return (
    <header className="">
              <nav className="navbar navbar-expand-lg">
                 <div className="container">
                       <a className="navbar-brand" href="/"><h2>TEDBUS</h2></a>
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse" id="navbarResponsive">
                         <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                             <a className="nav-link" href="/">Home
                               <span className="sr-only">(current)</span>
                             </a>
                           </li>
                           <li className="nav-item ">
                             <a className="nav-link" href="/about">About Us</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/services">Our Services</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/contact">Contact Us</a>
                           </li>
                           <li className="nav-item active">
                             <a className="nav-link" href="#booking_home">Book Now</a>
                           </li>
                         </ul>
                       </div>
                 </div>
              </nav>
           </header>
  )
}

export default BookHeaderTab
