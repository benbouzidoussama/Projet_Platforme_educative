import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPge from '../pages/CoursesPage';
import ProjectPage from '../pages/ProjectPage';
import ServecesPage from '../pages/ServecesPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CoursDetailsPage from '../pages/CoursDetailsPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/AllCourse" element={<CoursesPge />} />
            <Route exact path="/AllProject" element={<ProjectPage />} />
            <Route exact path="/AllService" element={<ServecesPage />} />
            <Route exact path="/ProjectDetailsPage/:ProjectId" element={<ProjectDetailsPage />} />
            <Route exact path="/CoursDetailsPage/:CourseId" element={<CoursDetailsPage />} />
        </Routes>
        </Fragment >
    );
};

export default AppRouter;
