import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css'
import {Col, Container, Row} from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'
export class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            subtitle:"",
        }
        
    }
    componentDidMount(){
            RestApi.GetRequest(AppUrl.Home).then(result=>{
                this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']});
            })
    }
    render() {
        return (
            <div>
                
                <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0">
                        <div className='topBannerOverly '>
                            <Container className='topContent'>
                                <Row>
                                    <Col className='text-center'>
                                        <h1 className='topTitle'> {this.state.title}</h1>
                                        <h1 className='topSubTitle'> {this.state.subtitle}</h1>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>           
                </Fragment>
            </div>
        )
    }
}

export default TopBanner
