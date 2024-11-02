import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import AllProject from '../components/AllProject/AllProject'

export class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="All Project" />
                <AllProject/>
                <Footer />
            </Fragment>
        )
    }
}

export default ProjectPage