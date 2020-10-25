import React from 'react';
import './Css/Anket.css';
import { Row, Col } from 'react-bootstrap';
import Btn from './Btn';

function Anket() {
    return (
        <div className='anketWrapper'>
            <form action="">
                <h4>Anket</h4>
                <img id='ankimg' src="https://ncube-digest.com/wp-content/uploads/2019/11/AI-Programming.png" alt="" />
                <h5>Hangisi ... ?</h5>
                <Row>
                    <Col>
                        <input type="radio" name="cevap" id="r1" />
                        <label htmlFor="r1">Seçenek</label>
                    </Col>
                    <Col>
                        <input type="radio" name="cevap" id="r2" />
                        <label htmlFor="r2">Seçenek</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="radio" name="cevap" id="r3" />
                        <label htmlFor="r3">Seçenek</label>
                    </Col>
                    <Col>
                        <input type="radio" name="cevap" id="r4" />
                        <label htmlFor="r4">Seçenek</label>
                    </Col>
                </Row>
                <div className='ankbtn'>
                    <Btn name='Gönder' />
                </div>
            </form>
        </div>

    )
}

export default Anket