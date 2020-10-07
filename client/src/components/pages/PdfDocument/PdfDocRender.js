import React from 'react'
import {PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './PdfDoc.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PdfDocRender(props){
    console.log("propss log");
    console.log(props)
    console.log(props.location)
    // const name = props.location.state.name.name.value
    // const gender = props.location.state.gender.gender.value
    const name = props.location.state.myDet.myDet.name.value
    const gender = props.location.state.myDet.myDet.gender.value
    // const myDet = props.location.state.myDet.myDet
    // console.log("Got Mydet in PdfDocRender")
    // console.log(myDet)
    var myDet2 ={
        name:name,
        gender: gender
      }
//     const age = props.ages
//     const ed1 = props.ed1
//    const  ed2 = props.ed2
//     const ed3 = props.ed3
// age = {age} ed1 ={ed1} ed2 = {ed2} ed3 = {ed3}
    return( 
        <Container fluid>
            <Row fluid>
                <Col md="12" >
                    {/* <MyDocument name ={name} gender = {gender}  /> */}
                    <MyDocument myDet = {myDet2} />
                </Col>
                {/* <PDFDownloadLink document={<MyDocument  name ={name} gender = {gender}/>} fileName="myfgg.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink> */}
    <PDFDownloadLink document={<MyDocument  myDet = {myDet2} />} fileName="mypdf.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
            </Row>
        </Container>
    );
        
}
export default PdfDocRender;
