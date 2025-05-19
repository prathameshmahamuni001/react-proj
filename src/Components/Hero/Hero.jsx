import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>New arrivals here</h2>

          <div>
            <div className="hand-hand-icon">
              <p style={{ fontSize: "40px" }}>New</p>
            </div>
          </div>
          <p style={{ fontSize: "40px" }}>Collections</p>
          <p style={{ fontSize: "40px" }}>For everyone</p>
        </div>

        <div className="hero-right">
          <img
            src="https://www.mdc.edu/fashion/img/fashion-forward-model.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
