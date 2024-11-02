/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Services/Services.css'
import '../../asset/css/Bootstrap.min.css'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class Services extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.Services).then(result => {
            this.setState({ data: result });
        })
    }
    render() {
        const List = this.state.data;
        const View = List.map((List) => {
            return(<Col lg={4} md={6} sm={12}>
                <div className='servieCard'>
                    <img src={List.service_logo} className='ServicesIcon' />
                    <h4 className='serviceName'>{List.service_name}</h4>
                    <p className='serviceDescription'>{List.service_description}</p>
                </div>
            </Col>)
        })
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle text-center'>MY SERVICES</h1>
                    <div className='botton'></div>
                    <Row>
                        {View}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services