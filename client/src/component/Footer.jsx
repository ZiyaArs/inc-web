import React from 'react';
import './Css/Footer.css';

const style1 = {
    'position': 'absolute'
}

const style2 = {
    'position': 'relative'
}

function Footer(props) {
    console.log(props.styl);
    var sor = props.styl;
    return (

        <div style={sor ? style2 : style1} className='main-footer'>
            <div className='center'>
                <h1>INC</h1>
                <div>
                    <a className='svgLink' target="_blank" href="https://www.linkedin.com/company/inc-yaz%C4%B1l%C4%B1m-%C3%A7%C3%B6z%C3%BCmleri/"><img src="/images/linkedin.svg" alt="" /></a>
                </div>
                <p>Telif Hakkı © 2020 INC. Tüm hakları saklıdır.</p>
            </div>
        </div>

    )
}

export default Footer