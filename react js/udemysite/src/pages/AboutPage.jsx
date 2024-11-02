import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from './TopPage'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import AboutDescription from '../components/AboutDescription/AboutDescription'

export class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="About" />
                <About />
                <AboutDescription/>
                <Footer/>
            </Fragment>
        )
    }
}

export default AboutPage