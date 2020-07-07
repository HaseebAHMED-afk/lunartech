import React from 'react';

function MainNav(){
    return <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed">
    <a className="navbar-brand mainnav-heading" href="#">Lunar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Cloud Computing<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Artifical Intelligence</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Data Center</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Quantum Computing</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      
      <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-light my-2 mr-sm-2" type="submit">Sign In</button>
      <button className="btn btn-outline-light my-2 mr-sm-2" type="submit">Sign Up</button>
    </form>

    </div>
  </nav>
  </div>
    {/* // <div className="main-nav navbar-expand-lg">
    //     <h1 className="mainnav-heading">Lunar</h1>
    //     <p className="mainnav-component">Cloud Services</p>
    //     <p className="mainnav-component">AI Solutions</p>
    //     <p className="mainnav-component">Server Solutions</p>
    //     <p className="mainnav-component">Quantum Computing</p>
    //     <p className="mainnav-component">Pricing</p>
    //     <button className="login-button">Log In</button>
    //     <button className="signup-button">Sign Up</button>
    // </div> */}
}

export default MainNav;