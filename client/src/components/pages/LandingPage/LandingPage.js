import React, {useEffect, useRef, Component} from 'react';
import { Link, useLocation } from 'react-router-dom'
import {  Container, Row, Col, Navbar, Nav, Figure } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import './LandingPage.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';
import './LandingPage21.css';
import Scroll from "react-scroll";
import {PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from '../PdfDocument/PdfDoc.js';
import Quixote from '../PdfDocument/PdfDoc.js'
// import ChatBot from 'react-simple-chatbot';
// import ScrollToTopOnMount from '../ScrollToTop/ScrollToTop'



function LandingPage() {
  // const {pathname}=useLocation();
  var scroll = Scroll.animateScroll;
  function scroller(){
    console.log("Scrolling to top from scroller");
    //scroll.scrollToTop();
    scroll.scrollTo(100);
  }
  useEffect(()=> {
  //   window.scrollTo(0,0);
  console.log("testing for useeffect")  

  const timer = setTimeout(() => {
    // setCount('Timeout called!');
    scroller();
  }, 5000);
  return () => clearTimeout(timer);




console.log("After calling scroller") 
});

  //const myRef = React.createRef();///useRef(null)
 

  return (
    
    <Container id="start" fluid>
    


    {/* <Row   ref={myRef} fluid="md"> */}
    <Row   fluid="md">
<Col  md="3">
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
      <Nav.Link className="myNavLink"  href="/about/">About</Nav.Link>
      <br/>
      <Nav.Link  className="myNavLink"  href="/recruiter/">Recruiter</Nav.Link>
      <br/>
      <Nav.Link  className="myNavLink"  href="/user/">User</Nav.Link>
    
    </Nav>

  </Navbar.Collapse>

  </Navbar>
  
    
    </Col>

     <Col md="4">
               <BotResume 
                  />
       </Col> 
       <Col  md="12">
{/* <PDFViewer width = "100%" height = "100%">
    <MyDocument />
    <MyDocument fr ="vhhvhv" kl = "hjhjhjhjhjhjh"/>
    
  </PDFViewer>
  <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink> */}
  </Col>
</Row>
{/* <ScrollToTopOnMount myRef={myRef}  /> */}


  
  </Container>
  );
}

export default LandingPage;
