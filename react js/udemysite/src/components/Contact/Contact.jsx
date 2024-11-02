import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../Contact/Contact.css"
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'

export class Contact extends Component {
    sendContact() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        let postData = new URLSearchParams();
        postData.append('name', name);
        postData.append('email', email);
        postData.append('message', message);
    
        RestApi.PostRequest(AppUrl.Contact, postData)
    .then(result => {
        // Assurez-vous que result.data.message existe et est pertinent
        const serverMessage = result.data.message;

        // Si le message contient des informations sensibles ou inutiles, vous pouvez personnaliser le message
        if (serverMessage) {
            // Vous pouvez ici formater ou modifier le message si nécessaire
            alert('Opération réussie :'); // Exemple de message personnalisé
        } else {
            alert("L'opération a été effectuée avec succès.");
        }
    })
    .catch(error => {
        // Vérifie si une réponse d'erreur est disponible
        if (error.response) {
            alert('Erreur : ' + (error.response.data.message || 'Une erreur inconnue est survenue'));
        } else {
            alert('Erreur réseau ou serveur non disponible.');
        }
    });

    }
    

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Quick Contact</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control id='name' type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label >Your Email</Form.Label>
                                    <Form.Control id='email' type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Message</Form.Label>
                                    <Form.Control id='message' as="textarea" rows={3} />
                                </Form.Group>
                                <br></br>
                                
                                <Button className='buttonContact' variant="primary" onClick={this.sendContact}>
                                    Send
                                </Button>
                            </Form>
                            
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Discuss Now</h1>
                            <p className='serviceDescription pt-2'>
                            <FontAwesomeIcon icon={faMap}size=''/> Address : KONYA? SELCUKLU, ECZIHCB DJEVJA ORJUYS SK.<br/>
                            <FontAwesomeIcon icon={faEnvelope}size=''/> Email : CTP1@gmail.com.<br/>
                            <FontAwesomeIcon icon={faPhone}size=''/> Phone : +90 785 963
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Contact