import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Css/CardWhite.css';


function CardWhite() {
    return (
        <Card className='cardWhite'>
            <Card.Header className='cardHead' >Kurum adı</Card.Header>
            <Card.Body className='cardBody'>
                <Card.Text style={{ color: 'white', paddingBottom: '60px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
    </Card.Text>
                <Button className='cardButton' variant="light">Daha fazla bilgi</Button>
            </Card.Body>
        </Card>

    )
}

export default CardWhite