import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'
import {  Container, Row, Col, Navbar, Nav, Figure } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import './LandingPage.css';
import BotResume from '../BotResume/BotResume.js';
import ScrollToTopOnMount from '../ScrollToTop/ScrollToTop'
import BotImage from './Susanbot_2.png';
import './LandingPage21.css'

import ChatBot from 'react-simple-chatbot';




function LandingPage() {
  // const {pathname}=useLocation();
  // useEffect(()=> {
  //   window.scrollTo(0,0);
  // },[pathname]);

  return (
    
    <Container id="start" fluid>
    

{/* <Row style = {{height : "500px"}} >

</Row> */}
    <Row fluid="md">
<Col md="3">
{/* <Row style ={{height:"37%"}}></Row> */}
  {/* <div className="speech-bubble">Text</div> */}
   {/* <img src={BotImage} className="BotImage" alt="BotLogo" />
   .img-fluid {
    max-width: 120%;
    height: 30%;
}
     */}
   {/* <Figure  className="d-md-block  BotImage d-lg-block d-sm-none d-xs-none" style={{ height:"100%"}} > */}
   <Figure  className="d-none d-md-block  BotImage" >
   {/* <Figure.Caption> I am Robbie</Figure.Caption> */}
     <Figure.Image   
    // width={171}
    
    height={0.3}
    alt="BotLogo"
     
     src={BotImage}  />

      
   </Figure>
    </Col>

    <Col md="5">

  <Navbar expand ="lg" >
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <Nav className="mr-auto d-block myNavBar" style={{width:"100%"}}> */}
    <Nav className="mr-auto d-block myNavBar" >
      <Nav.Link className="myNavLink" href="/about/">About</Nav.Link>
      <br/>
      <Nav.Link  className="myNavLink"  href="/recruiter/">Recruiter</Nav.Link>
      <br/>
      <Nav.Link  className="myNavLink"  href="/user/">User</Nav.Link>
    
    </Nav>

  </Navbar.Collapse>

  </Navbar>
  
    <Col className ="d-none" ><br/>
    <div className="speech-bubble56" style ={{ textAlign:"center", borderRadius:"45px 45px 45px 0", backgroundColor: "white" }}>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textDecorationLine: "none"}} to="/about/">About</Link>
      </div>
      </Col>
    <Col  className ="d-none" ><br/>
    <div className="speech-bubble56" style ={{ textAlign:"center", borderRadius:"45px 45px 45px 0", backgroundColor: "white" }}>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textJustify: "center", textDecorationLine: "none"}} to="/recruiter/">Recruiter</Link>
  </div>
    </Col>
  
    <Col className ="d-none" ><br/>
    <div className="speech-bubble56" style ={{ textAlign:"center", borderRadius:"45px 45px 45px 0", backgroundColor: "white" }}>
    <Link style = {{color: "#410074", font: "80px Avenir sans-serif", textDecorationLine: "none"}} to="/user/">User</Link>
    </div>
    </Col>
    </Col>

     <Col md="4">
               <BotResume 
                  />
       </Col> 
</Row>
<ScrollToTopOnMount />
    </Container>
  );
}

export default LandingPage;
