import React from 'react';
import Zoom from 'react-reveal/Zoom';

function PartnerTile(props){
    return <div>
    <Zoom cascade>
        <img src={props.path} className={props.class} alt={props.alt} />
        </Zoom>
    </div>
}

export default PartnerTile;