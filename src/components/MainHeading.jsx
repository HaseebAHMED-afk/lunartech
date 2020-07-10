import React from 'react';
import Slide from 'react-reveal/Slide'

function MainHeading(props){
    return <div>
    <Slide top cascade>
        <h1 className={props.headingClass}>
            {props.heading}
        </h1>
        </Slide>
        <Slide bottom cascade>
        <p className={props.paraClass} >{props.para}</p>
        </Slide> 
    </div>
    
}

export default MainHeading;