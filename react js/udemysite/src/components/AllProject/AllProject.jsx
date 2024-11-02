import React, { Component, Fragment } from 'react'
import { Button,Card, Col, Container, Row } from 'react-bootstrap'
import "../AllProject/AllProject.css"
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'
import { Link } from 'react-router-dom'

export class AllProject extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.AllProjects).then(result => {
            this.setState({ data: result });
        })
    }

    render() {
        let List = this.state.data;
        let View = List.map(List => {
            return(
                <Col lg={4} md={6} sm={12}>
                            <Card className='projectCard' >
                                <Card.Img variant="top" src={List.img_one} className='projectImg' />
                                <Card.Body>
                                    <Card.Title className='projectName'>{List.project_name}</Card.Title>
                                    <Card.Text className='projectDescription'>
                                        {List.project_description}
                                    </Card.Text>
                                    <Link to={'/ProjectDetailsPage/'+List.id}>
                                        <Button variant="primary" className='link'>Details</Button>
                                    </Link>
                                    </Card.Body>
                            </Card>
                        </Col>
            )
        })
        
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle text-center'>ALL PROJECT</h1>
                    <div className='botton'></div>
                    <Row className='text-center'>
                        {View}
                    </Row>
                </Container>
            </Fragment>)
    }
}

export default AllProject