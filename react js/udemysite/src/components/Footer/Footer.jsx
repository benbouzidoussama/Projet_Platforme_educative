/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Footer/Footer.css'
import '../../asset/css/Bootstrap.min.css'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class Footer extends Component {
    constructor() {
        super();
        this.state = {
            address: "",
            email: "",
            phone: "",
            facebook: "",
            youtube: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }

    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.Footer).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                facebook: result[0]['facebook'],
                youtube: result[0]['youtube'],
                twitter: result[0]['twitter'],
                instagram: result[0]['instegram'],
                linkedin: result[0]['linkedin'],
            });
        })
    }

    render() {
        return (
            <Fragment>
                <Container className='footerSection'>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='text-center p-5'>
                            <h4 className='footerName'>Follow Us</h4>

                            <div className='social-container'>
                                <a className='social iconcolor' href={this.state.facebook}><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                                <a className='social iconcolor' href={this.state.youtube}><FontAwesomeIcon icon={faYoutube} size='2x' /></a>
                                <a className='social iconcolor' href={this.state.linkedin}><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                                <a className='social iconcolor' href={this.state.twitter}><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
                                <a className='social iconcolor' href={this.state.instagram}><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-5'>
                            <h4 className='footerName text-center'>Address</h4>
                            <p className='footerDescription'>
                                <FontAwesomeIcon icon={faMap} />{this.state.address}<br />
                                <FontAwesomeIcon icon={faEnvelope} />{this.state.email}<br />
                                <FontAwesomeIcon icon={faPhone} />Phone:+90 {this.state.phone}
                            </p>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-5 text-justify'>
                            <h4 className='footerName'>Information</h4>
                            <a className='footerLink' href="">About Me <br /></a>
                            <a className='footerLink' href="">Company Profile <br /></a>
                            <a className='footerLink' href="">Contact Us <br /></a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Footer   