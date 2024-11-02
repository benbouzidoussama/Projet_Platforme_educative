// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import '../Videos/Videos.css';
import '../../asset/css/Bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player'; 
import AppUrl from '../../AppUrl/AppUrl';
import RestApi from '../../AppUrl/RestApi';
import ReactHtmlParser from 'react-html-parser';

export class Videos extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            video_description: "",
            video_url: "",
        };
    }

    componentDidMount() {
        // Récupère les données depuis l'API et met à jour l'état
        RestApi.GetRequest(AppUrl.Home).then(result => {
            this.setState({
                video_description: result[0]['video_description'],
                video_url: result[0]['video_url'],
            });
        }).catch(error => {
            console.error("Erreur lors de la récupération des données :", error);
        });
    }

    handleClose = () => this.setState({ show: false }); // Ferme la modal
    handleShow = () => this.setState({ show: true }); // Ouvre la modal

    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className='serviceTitle text-center'>OUR VIDEOS</h1>
                    <div className='botton'></div>
                    <Row>
                        <Col lg={6} md={12} sm={12} className='videoText'>
                            <p>
                            { ReactHtmlParser(this.state.video_description) }
                            </p>
                        </Col>
                        <Col lg={6} md={12} sm={12} className='videoCard text-center'>
                            <FontAwesomeIcon onClick={this.handleShow} icon={faVideoSlash} size='2x' className='iconProject' />
                        </Col>
                    </Row>
                </Container>
                <Modal size='lg' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body className="custom-modal-body">
                        {/* Utilise ReactPlayer pour lire la vidéo YouTube */}
                        <ReactPlayer url={this.state.video_url} className="custom-video-player" controls />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Videos;
