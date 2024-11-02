import React, { Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faClipboard, faClone, faTags, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import '../CourseDetails/CourseDetails.css';
import '../../asset/css/Bootstrap.min.css';
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';

const CourseDetails = ({ courseallData }) => {
    if (!courseallData || courseallData.length === 0) return null;

    const {
        long_title,
        small_img,
        long_description,
        total_student,
        total_duration,
        total_lecture,
        Categories,
        Tags,
        Instructor
    } = courseallData[0];

    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <h1>{long_title}</h1>
                        <img src={small_img} alt="Course" />
                        <p>{long_description}</p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="box_feature">
                            <h1>Course Details</h1>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon icon={faUser} /><span> Enrolled :</span>{total_student}</li>
                                <li><FontAwesomeIcon icon={faClock} /><span> Duration :</span> {total_duration} </li>
                                <li><FontAwesomeIcon icon={faClipboard} /><span> Lectures :</span> {total_lecture}</li>
                                <li><FontAwesomeIcon icon={faClone} /><span> Categories :</span> {Categories}</li>
                                <li><FontAwesomeIcon icon={faTags} /><span> Tags :</span> {Tags}</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /><span>  Instruction :</span> {Instructor}</li>
                            </ul>
                            <div className='price text-center'>
                                <h5>Price :<span>$54.00</span></h5>
                                <Button className='buttonCourse'>ENROLL COURSE</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br /><br />
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="box_feature">
                            <h1>Skills You Need</h1>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Understanding of graphic design concepts</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Basics in photography and image processing  </li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Basic Photography and Image Editing Knowledge</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Creativity and Observational Skills</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Basic Drawing and Illustration Skills </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" className="custom-video-player">
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CourseDetails;
