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
          <a className="nav-link" href="page.html">Cloud Computing<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="page.html">Artifical Intelligence</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="page.html">Data Center</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="page.html">Quantum Computing</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="page.html">Pricing</a>
        </li>
      </ul>
      
      <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-light my-2 mr-sm-2" type="submit">Sign In</button>
      <button className="btn btn-outline-light my-2 mr-sm-2" type="submit">Sign Up</button>
    </form>

    </div>
  </nav>
  </div>
}

export default MainNav;