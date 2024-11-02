import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'
import ReactHtmlParser from 'react-html-parser';

export class AboutDescription extends Component {
    constructor() {
        super();
        this.state = {
            data: [],


        }
    }
    componentDidMount(){
        RestApi.GetRequest(AppUrl.About).then(result=>{
            this.setState({data:result[0]});
        })
}
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <h1 >Who I Am </h1>
                        <hr />
                        <p>
                        { ReactHtmlParser(this.state.data['our_mission']) }
                        </p>

                        <br></br>

                        <h1 >Our Mission </h1>
                        <hr />
                        <p>
                        { ReactHtmlParser(this.state.data['our_mission']) }
                        </p>

                        <br></br>


                        <h1 >Our Vision</h1>
                        <hr />
                        <p>
                        { ReactHtmlParser(this.state.data['our_vision']) }

                        </p>

                    </Col>
                </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutDescription