import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import AppUrl from '../AppUrl/AppUrl';
import RestApi from '../AppUrl/RestApi';

const CoursDetailsPage = () => {
    const { CourseId } = useParams();
    const [CourseData, setCourseData] = useState([]);

    useEffect(() => {
        RestApi.GetRequest(AppUrl.CoursesDetails + CourseId).then(result => {
            setCourseData(result);
        });
    }, [CourseId]);

    return (
        <Fragment>
            <TopNavigation />
            <TopPage pagetitle="Course Details" />
            <CourseDetails courseallData={CourseData} />
            <Footer />
        </Fragment>
    );
};

export default CoursDetailsPage;
