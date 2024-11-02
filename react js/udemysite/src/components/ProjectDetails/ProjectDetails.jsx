/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import projectDetails from '../../asset/image/projectDetails.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import "../ProjectDetails/ProjectDetails.css"
export class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='mt-5 '>
                            <img src={projectDetails} />
                        </Col>
                        <Col lg={6} md={6} sm={12} className='mt-5'>
                            <div>
                                <h1>prject Web Site Angular & Spring Boot</h1>
                                <h4>project details:</h4>
                                <p>
                                    [ SESSION Mars ] Become a Full Stack Developer: Spring Boot and Angular now
                                    Register quickly and prepare yourself for a stable and future job with our % Practical training and full certification in Project mode: Spring Boot & Angular 10 #enLigne/ #Presential

                                    Training objectives:
                                    Develop your first full application in FullStack Project Mode back-end and front-end with Spring Boot and Angular 10
                                    Develop a complete APIREST based on the Spring Boot framework
                                    Implement good practices by creating services, interfaces, models ...
                                    Develop a navigation system between components, perform HTTP requests from its application and communicate with web services REST
                                    Learn the basics of creating friendly applications Front end with Angular
                                    Develop an application Spring boot and Spring cloud Angular10
                                    Learn the Microservices architecture with spring boot and Spring cloud
                                    Develop your first fullstack application with components, forms, and advanced tests...

                                    Duration: 35 H,
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faCheckSquare} />
                                </p>
                                <Button variant='info' href=''>Open</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ProjectDetails