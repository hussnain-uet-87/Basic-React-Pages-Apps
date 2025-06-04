import React from 'react'

const Services = () => {
  return (
    <div className='services'>
      <h1>Our Services</h1>
      <img className='bg-img' src="/public/images/bg-img.jpg" alt="" />
      <div className="content">
        <div className="box">
          <h3>Customized Travel Planning</h3>
          <p>Every traveler is unique, and so is every journey we plan. Our team works closely with you to understand your interests, budget then designs a personalized itinerary that fits your needs perfectly</p>
        </div>
        <div className="box">
          <h3>Flight and Hotel Bookings</h3>
        <p>Skip the hassle of searching endless options—we take care of it for you. From booking the best flights to finding top-rated, affordable hotels, we ensure comfort, convenience, and savings on every part of your journey.</p>
        </div>
        <div className="box">
          <h3>Visa Assistance & Travel Insurance</h3>
          <p>Travel with peace of mind. We offer complete visa guidance for multiple destinations, along with travel insurance options to keep you covered in case of emergencies, cancellations, or unexpected delays.</p>
        </div>
      </div>
    </div>
  )
}

export default Services