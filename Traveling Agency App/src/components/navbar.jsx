import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../App.css";
const Navbar = () => {
  useEffect(() => {
    const nav = document.getElementById("navbar-main");
    const hamburger = document.getElementById("hamburger");
    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const span3 = document.getElementById("span3");
    hamburger.addEventListener("click", () => {
      const currentMarginLeft = getComputedStyle(nav).marginLeft;
      nav.style.marginLeft = currentMarginLeft == "0px" ? "-300px" : "0px";
      if(currentMarginLeft == "-300px")
        {
          span1.style.transform = "rotate(45deg)";
          span1.style.marginBottom = "-12px";
          span2.style.transform = "rotate(-45deg)";
          span3.style.display = "none";
      }
      else if(currentMarginLeft == "0px")
        {
        span1.style.marginBottom = "0px";
        span1.style.transform = "rotate(0)";
        span2.style.transform = "rotate(0)";
        span3.style.display = "block";
        }
      console.log("button clicked")
    });
  },[]);
  // JSX
  return (
    <>
      <div className="hamburger" id="hamburger">
        <span className="span" id="span1"></span>
        <span className="span" id="span2"></span>
        <span className="span" id="span3"></span>
  
      </div>
      <div className="navbar-main" id="navbar-main">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
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
