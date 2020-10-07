import React from 'react';
import { Link } from 'react-router-dom'
import './About.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';

function AboutPage() {

  return (
    <div  className="LandingPage">
      
<div  className="LandingPageHeading">
  <img src={BotImage} className="BotImage" alt="BotLogo" /> 
  {/* <div className="speech-bubble">Text</div> */}
    </div>
    <div  className="Separator">

    
    <div style = {{ flexDirection:"row", flex: "1", flexWrap: "wrap", color: "#410074", font: "35px bold Avenir sans-serif"}}   className="speech-bubble-about"><br/>Hi there! I'm Robbie, your friendly Resume Bot. 
    Answer my questions and I will sweat out the interview for you. 
    I'll make you look like a pro!</div>
    
    </div>

     <div className="BotDesign">
                  <BotResume />
       </div>
    </div>
  );
}

export default AboutPage;
