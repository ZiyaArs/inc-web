import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Macos from "./Macos";
import "./Css/Contact.css";
import axios from "axios";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            errors: {
                name: "",
                email: "",
                message: ""
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;


        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, email, message } = this.state
        if (document.mainForm.name.value === "") {
            document.mainForm.name.focus();
            return false;
        }
        else if (document.mainForm.email.value === "") {
            document.mainForm.email.focus();
            return false;
        }
        else if (document.mainForm.message.value === "") {
            document.mainForm.message.focus();
            return false;
        } else {
            alert("Your Message Cannot Send.");
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div id='con' className="contactmain">
                <div className="contacttools">
                    <Row>
                        <Col>
                            <h3>Bize Ulaşın</h3>
                        </Col>
                    </Row>
                    <div className="divider">
                        <Row>
                            <Col>
                                <p>Mail Gönderin</p>
                            </Col>
                            <Col>
                                <h4>Ya da</h4>
                            </Col>
                            <Col>
                                <p>bu bilgilerden bize ulaşın</p>
                            </Col>
                        </Row>
                        <Row className="mailRow">
                            <Col>
                                <div className="mailWindow">
                                    <form onSubmit={this.handleSubmit} name="mainForm">
                                        <Macos />
                                        <p>Kime: info@incyazilim.net</p>
                                        <div>
                                            <label htmlFor="name">İsim-Soyisim:</label>
                                            <input type="text" name="name" autoComplete="off" onChange={this.handleChange} />
                                            {errors.name.length > 0 && <span className='errorMessage'>{errors.name}</span>}
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" name="email" onChange={this.handleChange} autoComplete="off" />
                                            {errors.email.length > 0 && <span className='errorMessage'>{errors.email}</span>}
                                        </div>
                                        <div>
                                            <textarea placeholder="Mesajınızı giriniz" name="message" cols="30" rows="10" onChange={this.handleChange} />
                                            {errors.message.length > 0 && <span className='errorMessage'>{errors.message}</span>}
                                        </div>
                                        <button type="submit" className="btnSend">Gönder</button>
                                    </form>
                                </div>
                            </Col>
                            <Col>
                                <div className="contactinfo">
                                    <div>
                                        <img src="/images/gmail.svg" alt="" />
                                        <p>info@incyazilim.net</p>
                                    </div>
                                    <div>
                                        <img src="/images/phone.svg" alt="" />
                                        <p>+90 552 356 46 29</p>
                                    </div>
                                    <div>
                                        <img src="/images/adress.svg" alt="" />
                                        <p>Zafer Mah. Üniversite Varyantı Cad. No:80 EFELER-AYDIN</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
