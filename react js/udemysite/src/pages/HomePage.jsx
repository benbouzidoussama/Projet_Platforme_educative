import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopBanner from '../components/TopBanner/TopBanner'
import Courses from '../components/Courses/Courses'
import RecentProject from '../components/RecentProject/RecentProject'
import About from '../components/About/About'
import Team from '../components/Team/Team'
import Videos from '../components/Videos/Videos'
import Chart from '../components/Chart/Chart'
import Services from '../components/Services/Services'
import Summary from '../components/Summary/Summary'
import Footer from '../components/Footer/Footer'

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                
                <TopNavigation />
                <TopBanner />
                <Courses />
                <RecentProject />
                <About />
                <Team />
                <Videos />
                <Chart />
                <Services />
                <Summary />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage