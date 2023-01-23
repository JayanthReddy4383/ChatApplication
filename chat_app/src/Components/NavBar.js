import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate= useNavigate();

  const navigateToAccounts = () =>{
    navigate('/Accounts');
  }

    return(
        <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>CName</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/App'>Chat page</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" >Action</a>
          <a className="dropdown-item" >Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" >Something else here</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={navigateToAccounts}>Log In</button>
    </form>
  </div>
</nav>
    </div>
    )
}

export default NavBar;