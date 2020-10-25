import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Btn from './Btn';
import './Css/Navbar.css';
import logo from "../images/logo.png";

function Navbar() {
    return (
        <Row className='navrow'>
            <Col><a href="/" id='logo'><img style={{ 'height': '50px', 'marginLeft': '50px' }} className="logo" src={logo} alt="INC"></img></a></Col>
            <Col>
                <a href="/hakkimizda">Hakkımızda</a>
                <a href="/#succ">Ürünlerimiz</a>
                <a href="/blog">Blog</a>
                <a href="/#con"><Btn name='İletişim' /></a>
            </Col>
        </Row>
    )
}

export default Navbar