/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Courses/Courses.css"
import { Link } from 'react-router-dom';
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class AllCourses extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.AllCourses).then(result => {
            this.setState({ data: result });
        })
    }
    render() {
        let List = this.state.data;
        let View = List.map(List => {
            return (
                <Col lg={6} md={6} sm={12} className='p-2'>
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
                <Container className='text-center'>
                    <h1 className='serviceTitle text-center'>ALL COURSES</h1>
                    <div className='botton'></div>
                    <Row>
                        {View}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllCourses