import React from 'react';
import { Button } from 'react-bootstrap';
import './Css/Btn.css';

function Btn(props) {
    return (
        <div className='btn'>
            <Button className='btn-main' href={props.pat} variant="info">{props.name}</Button>
        </div>

    )
}

export default Btn