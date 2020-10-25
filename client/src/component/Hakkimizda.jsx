import React from 'react';
import { Row, Col } from 'react-bootstrap';

import inc from '../images/InC.png'
import './Css/Hakkimizda.css';



function Hakkımızda() {
    return (
        <div className='mainwrapper'>
            <Row>
                <Col>
                    <div className="logoimg">
                        <img src={inc} alt="" className="image" />
                    </div>
                </Col>
                <Col>
                    <div className="abtwrapper">
                        <h1>Hakkımızda</h1>
                        <p className="text">INC Yazılım Çözümleri, yazılım sektöründe faaliyet
                        gösteren, birçok sektörler ile çalışma içinde olan, alanında
                        uzman girişimcilerin kurmuş olduğu genç bir şirkettir.
                        İnovasyon ve sistem kelimelerinden ilham almış olup
                        yazılım sektöründe müşterilerine en uygun koşullarla “yenilikçi
                        sistemler“ ile çözüm üretmeyi ilke edinen yeni bir zihniyetin
                        temsilcisidir. Şirketimizin temeli 2019 yılında ADÜ
                        Teknopark’ta atılmış olup, gelişen teknolojiye ayak uydurmak,
                        müşteri ihtiyaçlarına özel çözümler üretmek ve firmaların
                        kurumsal yapıya geçişlerinde teknoloji hizmeti vermek amacıyla
                faaliyetine başlamıştır.</p>
                        <h3>Misyonumuz</h3>
                        <p className="text">Sürekli gelişen teknolojiyi yakından takip ederek yeniliklere uyarlanan, değişime öncülük eden, mühendislik zekasını her işe yansıtan, yurt içinde ve yurt dışında tercih edilen uluslararası bir yazılım şirketi olmaktır.</p>
                        <h3>Vizyonumuz</h3>
                        <p className="text">Müşterilerimizin gereksinimlerine ve beklentilerine etkili bir şekilde karşılık vererek farklı beklentilerine farklı çözümler üretmek. Müşteri memnuniyetini esas alan bir yaklaşımla kalite ve maliyet dengesini kurup yüksek kalite ürün ve hizmet sunmaktadır.</p>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Hakkımızda