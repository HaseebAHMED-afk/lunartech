import React from 'react';
import Fade from 'react-reveal/Fade';

function SecondDiv(){
    return <div className="second-div">
    <h1>What we provide</h1>
        <div className="row">
        <Fade left cascade>
    <div className="col-lg-4 col-md-6 coloumn">
        <h3 className="cloud-heading">Cloud Computing</h3>
        <img src="source-images/cloudlogo.png" className="cloud-logo" alt="cloud-logo" />
        <p className="cloud-description">Using the state of the art technology, we provide top-notch quality service at a very affordable price.</p> 
        <p className="cloud-description"><strong>The Eclipse</strong>, our trademark cloud computing platform is the very definition of performance & power</p>
        <button className="btn btn-lg btn-outline-light">Learn More</button>
    </div>
    </Fade>
    <Fade top cascade>
    <div className="col-lg-4 col-md-6 coloumn">
        <h3 className="quantum-heading">Quantum Computing</h3>
        <img src="source-images/lunarcpu-1.png"  className="quantum-logo" alt="quantum-logo" />
        <p className="quantum-description">The world of Quantum Computing is well-preserved and cared for in the kingdom of Lunar Technlogy.</p>
        <p className="quantum-description">Our flagship <strong>Lunar CPU</strong> allows us to push the boundaries of the quantum computing. </p>
        <button className="btn btn-lg btn-outline-light">Learn More</button>
    </div>
    </Fade>
    <Fade right cascade>
    <div className="col-lg-4 coloumn">
        <h3 className="ai-heading">Artificial Intelligence</h3>
        <img src="source-images/ailogo.png" className="ai-logo" alt="ai-logo" />
        <p className="ai-description">Highly trained and personilized AI. Structured to fit your organization's needs.</p>
        <p className="ai-description"><strong>Jupiter</strong>, a self-aware, contained and highly-advanced AI architecture allows us to extend the horizon of Artifical Intelligence. </p>
        <button className="btn btn-lg btn-outline-light">Learn More</button>
    </div>
    </Fade>
    
  </div>
  <div className="row">
  <div className="col-lg-4 col-md-6 coloumn">
  </div>
  <Fade bottom cascade>
  <div className="col-lg-4 col-md-6 coloumn">
      <h3 className="cloud-heading">Data Center</h3>
        <img src="source-images/serverlogo.png" className="server-logo" alt="server-logo" />
        <p className="cloud-description">The fastest data center of the next generation. With the vision of top speed and top performance, our data center is the pinnacle of data analysis industry.</p> 
        <p className="cloud-description"><strong>The Europa</strong>, our leading data analysis facility spread over 350 acres in our Nevada facility provides the foundation of Lunar Technologies Corporation. </p>
        <button className="btn btn-lg btn-outline-light">Learn More</button>
  </div>
  </Fade>
  <div className="col-lg-4 col-md-6 coloumn">
  </div>
  </div>
    </div> 
}

export default SecondDiv;