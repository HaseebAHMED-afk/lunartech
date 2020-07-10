import React from 'react';
import Fade from 'react-reveal/Fade';

function FirstDiv(){
    return  <div className="firstdiv">
         <img className="server-image" src="source-images/server-images-firstdiv.jpg" alt="server" />
         <Fade top cascade>
         <div className="eclipse-div">
             <h3 className="eclipse-intro">Introducing</h3>
             <h1 className="eclipse-heading">Eclipse</h1>
             <p className="eclipse-description">The next generation in Cloud Computing</p>
             <button className="btn btn-lg btn-outline-light learn-button">Learn More</button>
         </div>
         </Fade>
    </div>
}

export default FirstDiv;