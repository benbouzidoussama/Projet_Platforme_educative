import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from './TopPage'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="Contact" />
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}

export default ContactPage