import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
export class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="Project Detaills" />
                <ProjectDetails/>
                <Footer />
            </Fragment>
        )
    }
}

export default ProjectDetailsPage