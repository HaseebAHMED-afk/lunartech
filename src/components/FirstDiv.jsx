import React from 'react';

function FirstDiv(){
    return  <div className="firstdiv">
         <img className="server-image" src="source-images/server-images-firstdiv.jpg" alt="server-image" />
         <div className="gradient-overlay"></div>
         <div className="eclipse-div">
             <h3 className="eclipse-intro">Introducing</h3>
             <h1 className="eclipse-heading">Eclipse</h1>
             <p className="eclipse-description">The next generation in Cloud Computing</p>
             <button className="btn btn-md btn-outline-light learn-button">Learn More</button>
         </div>
    </div>
}

export default FirstDiv;