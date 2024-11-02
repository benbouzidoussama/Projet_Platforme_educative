/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../TopNavigation/TopNavigation.css'
import logo from "../../asset/image/logo.png";
import logoScroll from '../../asset/image/logoScroll.png'
import { NavLink } from 'react-router-dom';

export class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navBarTitle: 'navTitle',
            logo: [logo],
            Navbarback: 'navBackground',
            NavbarItems: "NavItems",
            variant: "dark"
        }
    }
    Secroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navBarTitle: 'navTitleScroll', logo: [logoScroll], Navbarback: 'navBackgroundScroll', NavbarItems: "NavItemsScroll", variant: "light" })
        } else {
            this.setState({ navBarTitle: 'navTitle', logo: [logo], Navbarback: 'navBackground', NavbarItems: "NavItems", variant: "dark" })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.Secroll)
    }

    render() {
        const activeStyle = { color: '#ffee00' };
        return (
            <Fragment>
                <Navbar fixed='top' collapseOnSelect expand="lg" className={this.state.Navbarback} variant={this.state.variant}>
                    <Container >
                        <Nav.Link as="div">
                            <NavLink exact to="/home" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>
                                <Navbar.Brand to="#home" className={this.state.navBarTitle}><img src={this.state.logo} /> Oussama Academy</Navbar.Brand>
                            </NavLink>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link as="div">
                                    <NavLink exact to="/home" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>Home</NavLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <NavLink exact to="/about" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>About</NavLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <NavLink exact to="/AllService" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>Services</NavLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <NavLink exact to="/AllCourse" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>Courses</NavLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <NavLink exact to="/AllProject" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>Project</NavLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <NavLink exact to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} className={this.state.NavbarItems}>Contact</NavLink>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation

