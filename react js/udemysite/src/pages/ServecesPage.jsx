import React, { Component, Fragment } from 'react'
import Services from '../components/Services/Services'
import TopPage from './TopPage'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'

export class ServecesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="Services" />
                <Services />
                <Footer />
            </Fragment>
            
        )
    }
}

export default ServecesPage