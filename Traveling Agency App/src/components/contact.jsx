import React from "react";

const Contact = () => {
  return (
    <div className="main-contact">
    <div className="contact">
      <div className="form">
        <form action="">
          <h2 id="heading">Send us a message</h2>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" placeholder="Message" id=""></textarea>
          <button id="send">Send</button>
        </form>
      </div>
      <div className="content">
        <h2>Contact Us</h2>
        <p id="subheading">
          Got Something to Discuss? <br />
          Get in Touch Now!
        </p>
        <div className="details">
          <div className="row">
            <i class="bi bi-pin-map-fill"></i>
            <p>Floor No.3, Hall Road Building, Model Town, Lahore, Punjab</p>
          </div>
          <div className="row">
            <i class="bi bi-telephone-fill"></i>
            <p>0301-1234567</p>
          </div>
          <div className="row">
            <i class="bi bi-envelope-check-fill"></i>
            <p>hussnainuet87@gmail.com</p>
          </div>
          <div className="row">
            <i class="bi bi-linkedin"></i>
            <p>Seni Travels Agency</p>
          </div>
          <div className="row">
            <i class="bi bi-link-45deg"></i>
            <p>Www.SeniTravels.com</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
