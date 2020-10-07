import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';


import ChatBot from 'react-simple-chatbot';




function LandingPage() {

  return (
    
    <Container fluid>


    <Row>
<Col className="LandingPageHeading">
  <img src={BotImage} className="BotImage" alt="BotLogo" /> 
  {/* <div className="speech-bubble">Text</div> */}
    </Col>
    <Col className="Separator">

  
    
    <div className="speech-bubble2"><br/>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textDecorationLine: "none"}} to="/about/">About</Link>
      </div>
    <div className="speech-bubble3"><br/>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textJustify: "center", textDecorationLine: "none"}} to="/recruiter/">Recruiter</Link>
    </div>
    <div className="speech-bubble"><br/>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textDecorationLine: "none"}} to="/user/">User</Link>
    </div>
    </Col>

     <Col className="BotDesign">
                  <BotResume 
                  />
       </Col>
</Row>
    </Container>
  );
}

export default LandingPage;
