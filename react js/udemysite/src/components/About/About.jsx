/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import pic from '../../asset/image/pic.png'
import '../About/About.css'
import '../../asset/css/Bootstrap.min.css'
import { init } from 'ityped'

export class About extends Component {

     componentDidMount() {
          const myElement = document.querySelector('#myElement')
          init(myElement, { showCursor: false, strings: ["imporve your skills",'your future!'] })
     }


     render() {
          return (
               <Fragment>

                    <Container className="text-center" >
                    <h1 className='serviceTitle text-center'>ABOUT US</h1>
                    <div className='botton'></div>
                         <Row>
                              <Col lg={6} md={6} sm={12}>
                                   <img className="aboutImage" src={pic} /> </Col>

                              <Col lg={6} md={6} sm={12}>

                                   <div className="aboutBody">

                                        <h2 className="about1" >HI There,We are</h2>

                                        <h2>Oussama Academy for Beginner</h2>


                                        <h3 className="about1">Work as <span id="myElement"> </span> </h3>
                                   </div>


                              </Col>

                         </Row>



                    </Container>






               </Fragment>
          )
     }
}

export default About
