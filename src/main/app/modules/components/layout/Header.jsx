import React from 'react';import {Nav, NavItem, Navbar} from 'react-bootstrap';import {LinkContainer} from 'react-router-bootstrap';const propTypes = {    isAuthenticated: React.PropTypes.bool.isRequired,    onLogout: React.PropTypes.func};class Header extends React.Component {    constructor(props) {        super(props);        this.handleLogout = this.handleLogout.bind(this);    }    handleLogout() {        this.props.onLogout();    }    render() {        const {brand, isAuthenticated} = this.props;        return (            <Navbar className="navbar-default navbar-static-top">                <Navbar.Header>                    <Navbar.Brand>{brand}</Navbar.Brand>                </Navbar.Header>                <Nav pullRight>                    {isAuthenticated &&                        <NavItem eventKey={3} onClick={this.handleLogout}>Logout</NavItem>                    }                    {!isAuthenticated &&                        <LinkContainer to="/login">                            <NavItem eventKey={1}>Sign In</NavItem>                        </LinkContainer>                    }                    {!isAuthenticated &&                        <LinkContainer to="/registration">                            <NavItem eventKey={2}>Sign Up</NavItem>                        </LinkContainer>                    }                </Nav>            </Navbar>        )    }}Header.propTypes = propTypes;export default Header;