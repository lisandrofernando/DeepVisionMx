import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import {DefaultPlayer as Video} from 'react-html5video'
import gvideo from '../assets/logoandvideos/video-2.mp4'
function HeroSection() {
  return (
    
    <div className='hero-container' id="Home">
      {/* <Video className="video"
        src={gvideo}
       type="video/mp4"
       autoPlay loop muted
      /> */}
      <h1>PARTNER WITH US</h1>
      <p>Get in touch</p>
      <div className="here-btns">
        <Button
          className="btns"
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          We are a Global Consultant <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
