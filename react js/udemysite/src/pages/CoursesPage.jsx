import React, { Component, Fragment } from 'react'
import TopPage from './TopPage'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import AllCourses from '../components/AllCourses/AllCourses'

export class CoursesPge extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="All Course" />
                <AllCourses/>
                <Footer />
            </Fragment>
        )
    }
}

export default CoursesPge