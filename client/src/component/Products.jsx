import React from 'react';
import Macos from './Macos';
import { Row, Col, Carousel } from 'react-bootstrap';

import './Css/Products.css';


function BlackDivider() {
    return (
        <div id='succ' className='mainPart'>
            <Row>
                <div className='toolbar'>
                    <Macos />
                    <h5>Ürünlerimiz</h5>
                </div>
            </Row>
            <Row>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <div className='imagePositioner'>
                                    <img src='/images/arada.jpeg' alt='Arada' />
                                </div>
                            </Col>
                            <Col>
                                <div className='textwrapper'>
                                    <h3>ARADA</h3>
                                    <p>Arada (Arabulucuk Dijital Asistanı), hukuk alanında arabuluculuk konusunda arabulucu kişiye mevzuat hükümlerine göre, gerekli dosya işlemlerinde dijital olarak asistanlık eder; dosyaları mevzuata uygun biçimde oluşturup, dosya takibine, kaydetme, gönderme ve yazdırma gibi bir çok seçenek ile dosyaların korunmasına ve saklanmasına olanak sağlar.

Ek olarak, arabulucuk işlemlerinin her konumda telefon yolu ile yapılmasını sağlayarak arabulucu kişilerin üzerindeki iş yükünü hafifletir.</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <div className='imagePositioner'>
                                    <img src='/images/iguda.jpeg' alt='Arada' />
                                </div>
                            </Col>
                            <Col>
                                <div className='textwrapper'>
                                    <h3>İGUDA</h3>
                                    <p>İGUDA kamu kurum kuruluşları başta olmak üzere tüm sektörlerde, işverenin 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'nu ve ilgili mevzuat hükümlerine göre sunmakla yükümlü olduğu İSG hizmetlerini, işveren adına gerçekleştiren İSG Profesyonellerinin iş ve
                                    işlemlerini takip etmek ve insan kaynaklı eksiklikleri en aza indirgemek için tasarlanmış İSG Dijital Asistanıdır. Ayrıca İSG Profesyonellerinin karar vermekte güçlük yaşadığı konularda onlara kılavuzluk ederek iş akışının aksamadan yürümesini sağlar,
                                    İSG profesyonelleri üzerindeki iş yükünün getirdiği baskıyı azaltmayı amaçlar.</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </div>

    )
}
export default BlackDivider