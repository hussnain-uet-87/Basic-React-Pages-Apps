import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../App.css";
const Navbar = () => {
  useEffect(() => {
    const nav = document.getElementById("navbar-main");
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", () => {
      const currentMarginLeft = getComputedStyle(nav).marginLeft;
      nav.style.marginLeft = currentMarginLeft == "0px" ? "-300px" : "0px";
      console.log("button clicked")
    });
  },[]);
  return (
    <>
      <div className="hamburger" id="hamburger">
        <span className="span"></span>
        <span className="span"></span>
        <span className="span"></span>
  
      </div>
      <div className="navbar-main" id="navbar-main">
        <div className="logo">
          <img src="public/images/logo.png" alt="" />
          <h2>Seni Travels</h2>
        </div>
        <div className="search">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search Destinations..." />
        </div>
        <ul>
          <li>
            <a href="/">Home</a> <span className="line"></span>
          </li>
          <li>
            <a href="/services">Services</a> <span className="line"></span>
          </li>
          <li>
            <a href="/about">About Us</a> <span className="line"></span>
          </li>
          <li>
            <a href="/contact">Contact </a>
            <span className="line"></span>
          </li>
        </ul>
        <button>Get the App</button>
      </div>
    </>
  );
};

export default Navbar;
