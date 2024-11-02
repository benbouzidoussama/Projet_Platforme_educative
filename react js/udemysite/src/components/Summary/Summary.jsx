import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import '../Summary/Summary.css'

import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

export class Summary extends Component {
     render() {
          return (
               <Fragment >
                    <Container fluid={true} className="DesignContainer p-0">
                         <div className="DesignContainerOverly">
                              <Container >
                                   <Row>
                                        <Col lg={4} md={6} sm={12} >
                                             <Card className="CardFeatures">
                                                  <Card.Body>
                                                       <Card.Title className="CardTitle">What I Have Achieved</Card.Title>
                                                       <Card.Text>
                                                            <p className="CardSubTitle text-justify"> <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />Requirment Gathering</p>
                                                            <p className="CardSubTitle text-justify"> <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />Requirment Gathering</p>
                                                            <p className="CardSubTitle text-justify"> <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />Requirment Gathering</p>
                                                            <p className="CardSubTitle text-justify"> <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />Requirment Gathering</p>
                                                       </Card.Text>
                                                  </Card.Body>
                                             </Card>
                                        </Col>
                                        <Col lg={8} md={6} sm={12} className="text-center" >
                                             <Row className="RowSection">
                                                  <Col>
                                                  
                                                  <FontAwesomeIcon icon={faGlobe} className="IconDesign" />
                                                       <h1 className="Numbers">
                                                           
3000
                                                       </h1>
                                                       <h4 className="Title">Students Worldwide</h4>
                                                       <hr className="bg-black wd-25 " />
                                                  </Col>
                                                  <Col>
                                                  <FontAwesomeIcon icon={faLaptop} className="IconDesign" />
                                                      
                                                       <h1 className="Numbers">
                                                       
                                                       5
                                                       </h1>
                                                       <h4 className="Title">Courses Published
                                                       </h4>
                                                       <hr className="bg-black wd-25 " />
                                                  </Col>
                                                  <Col>
                                                  <FontAwesomeIcon icon={faStar} className="IconDesign" />
                                                     
                                                       <h1 className="Numbers">
                                                    1000
                                                       </h1>
                                                       <h4 className="Title">Student Reviews</h4>
                                                       <hr className="bg-black wd-25 " />
                                                  </Col>
                                             </Row>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </Container>
               </Fragment>
          )
     }
}
export default Summary
