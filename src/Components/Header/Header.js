import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navbar p-3'>
            <Container>
                <Navbar.Brand className=''>
                    <img
                        src="logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="logo"
                    />
                    Kichu-Proshno</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto nav-link">
                        <Link to="/">Home</Link>
                        <Link to="topic">Topic</Link>
                        <Link to="statistics">Statistics</Link>
                        <Link to="blog">Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;