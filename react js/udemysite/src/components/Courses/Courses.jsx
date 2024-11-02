/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Courses/Courses.css"
import { Link } from 'react-router-dom';
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class Courses extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.FourCourses).then(result => {
            this.setState({ data: result });
        })
    }

    render() {
        const List = this.state.data;
        const View = List.map(List => {
            return (
                <Col lg={6} md={6} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={List.small_img} className='courseImg' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h4 className='text-justify serviceName'>{List.short_title}</h4>
                            <p className='text-justify serviceDescription'>{List.short_description}</p>
                            <Link to={'/CoursDetailsPage/'+List.id} className='courseViewMore'>View Details</Link>
                        </Col>
                    </Row>
                </Col>
            )
        })
        return (
            <Fragment>
                <Container className='text-center courseText'>
                    <h1 className='serviceTitle text-center'>MY COURSES</h1>
                    <div className='botton'></div>
                    <Row>
                        
                                {View}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Courses