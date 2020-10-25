import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Products';
import CardWhite from './CardWhite';
import Contact from './Contact';

import './Css/Anamenu.css';

function AnaMenu() {
    return (
        <div className='introduction'>
            <Row>
                <Col>
                    <div className="intro">
                        <div className="introwrapper">
                            <h1>Biz Kimiz?</h1>
                            <p>INC Yazılım Çözümleri, yazılım sektöründe faaliyet
                            gösteren, birçok sektör ile çalışma içinde olan, alanında
                            uzman girişimcilerin kurmuş olduğu genç bir şirkettir.
                            İnovasyon ve sistem kelimelerinden ilham almış olup
                            yazılım sektöründe müşterilerine en uygun koşullarla “yenilikçi
                            sistemler“ ile çözüm üretmeyi ilke edinen yeni bir zihniyetin
                            temsilcisidir. Şirketimizin temeli 2019 yılında ADÜ
                            Teknopark’ta atılmıştır, gelişen teknolojiye ayak uydurmak,
                            müşteri ihtiyaçlarına özel çözümler üretmek ve firmaların
                            kurumsal yapıya geçişlerinde teknoloji hizmeti vermek amacıyla
                faaliyetine başlamıştır.</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="imagediv">
                        <img src="/images/network.svg" alt="network" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Product />
            </Row>
            <Row>
                <div className="success">

                </div>
            </Row>
            <Row>
                <Contact />
            </Row>
        </div>

    )
}

export default AnaMenu