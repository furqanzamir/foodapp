import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary d-none d-lg-block" data-bs-theme={props.moodText}>     
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to='/home' className="navbar-brand">{props.title}</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/home' className="nav-link active" aria-current="page">{props.homeText}</Link>              
            </li>
            <li className='nav-item'>
              <Link to='/about' className="nav-link active" aria-current="page">{props.aboutTile}</Link>
              </li>
              <li className="nav-item">
              <Link to='/TextForm' className="nav-link">TextForm</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to='/TextForm' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Text Form
              </Link>
              <ul className="dropdown-menu">
                <li><Link to='/' className="dropdown-item">Action</Link></li>
                <li><Link to='/' className="dropdown-item">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to='/' className="dropdown-item">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link">Link</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <div className={`form-check form-switch ${props.moodText === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMood}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.moodText === 'light'?'Switch to Dark':'Switch to Light'}</label>
            </div>
        </span>
        </div>
      </div>
    </nav>
    <nav className="navbar bg-body-tertiary fixed-top d-block d-lg-none">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="/#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to='/' className="dropdown-item">Action</Link></li>
                  <li><Link to='/' className="dropdown-item">Another action</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}


//Props Data Type Assign
// Navbar.propTypes = {
//     title:PropTypes.string.isRequired,
//     homeText:PropTypes.string.isRequired
// }

//Default Props Set
// Navbar.defaultProps = {
//     title: 'FZ',
//     homeText: 'Home'
// }