import React from 'react';

function Footer(props){
    return <div className="footer-area">
        <p className="footer-content">{props.content}</p>
    </div>
}

export default Footer;