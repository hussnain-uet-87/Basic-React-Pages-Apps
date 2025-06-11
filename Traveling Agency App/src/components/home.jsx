import React from "react";
import "../App.css"
const Home = () => {
  return (
    <div id="hero">
      <div id="hero-content">
        <i class="bi bi-arrow-down-up"></i>
        <h1>
          People dont <br />
          take trips, trips <br />
          take people
        </h1>
        <p>
          To get the best of your adventure you just 
          need to leave and go where you like.We are 
          waiting for you!
        </p>
        <button>Plan a Trip <i class="bi bi-arrow-right"></i></button>
      </div>
      <div id="hero-img">
        <img src="/images/hero-img.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
