import React from 'react';
import { Link } from 'react-router-dom'
import './RecruiterPage.css';
import BotResume from '../CustomChatbot/CustomChatbot.js';
import BotImage from './Susanbot_2.png'
function Recruiter() {

  return (
    // <div className="ClearMyDiv">
    <div className="LandingPage">
<div className ="LandingPageHeading">

<img src={BotImage} className="BotImage" alt="bot"/>

              {/* <header className="LandingPage-header">
                <p>
                    Kickstart Coding - Frontend React<br />
                    MERN Starter Project
                </p>
                <Link to="/blog/">Blog</Link>
                <Link to="/write/">Write article</Link>
              </header> */}
    </div>

<div className="Separator">
<div className="speech-bubble">
  Test Bub
</div>

</div>
     <div className="BotDesign">
                  <BotResume />
       </div>
    </div>
    
  );
}

export default Recruiter;
