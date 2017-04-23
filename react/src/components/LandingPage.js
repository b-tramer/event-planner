import React from 'react';

const LandingPage = props => {
  return (
    <div className="main-container">

    <div className="row photo">
      <div className="small-12 large-4 columns">
      <img src="leon1.jpg"/>
      </div>
      <div className="small-12 large-4 columns">
      <img src="leon2.jpg"/>
      </div>
      <div className="small-12 large-4 columns">
      <img src="leon3.jpg"/>
      </div>
    </div>

    <div className="row information">
      <div className="small-12 large-6 columns">
        <h3>Date & Time</h3>
        <p>{props.event.date.toDateString()}</p>
        <p>{props.event.date.toTimeString()}</p>
      </div>

      <div className="small-12 large-6 columns">
        <h3>Location</h3>
        <p>{props.event.venue}</p>
        <p>{props.event.address}</p>
      </div>
    </div>

    <div className="column row buttons">
      <button className="main-button" onClick={props.registrationLink}>Register ⟶</button>
      <button className="main-button" onClick={props.registrantsLink}>See Who is Coming ⟶</button>
    </div>
    </div>
  )
}

export default LandingPage;
