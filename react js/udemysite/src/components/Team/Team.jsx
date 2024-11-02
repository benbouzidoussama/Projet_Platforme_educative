/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Team/Team.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class Team extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
        }
    }
    componentDidMount() {
        RestApi.GetRequest(AppUrl.Team).then(result => {
            this.setState({
                data:result,
            });
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            vertical: true,
            verticalSwiping: true,
        };
        const List = this.state.data;
        const View = List.map(
            List => {
                return <div>
                    <Row className='text-center justify-content-center'>
                        <Col>
                            <img className='circleImg' src={List.team_img} />
                            <h4 className='Name'>{List.team_title}</h4>
                            <p className='Description'>
                                {List.team_description}
                            </p>
                        </Col>
                    </Row>
                </div>
            }
        )
        return (
            <Fragment>
                <Container fluid={true} className='Bgcolor text-center'>
                    <h1 className='TeamTitle text-center p-2'>OUR TEAM</h1>
                    <div className='bottonTeam'></div>
                    <Slider {...settings}>
                        {View}
                        {View}
                        {View}
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default Team