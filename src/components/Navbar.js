import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "../App.css"

export default function Navbar(props) {
  return (
    // $ is used so that dark can be used as an variable
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`} >
      {/* //backtiks is used to use template litral */}
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/">
              <li className="nav-link active"  >
                {props.home}
              </li>
            </Link>


            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutText}</Link>
            </li>


          </ul>
        </div>
        {/* <div>
    <button type="button" className="btn btn-outline-primary" onClick={()=>{props.toggleMode('primary')}}>Blue</button>
    <button type="button" className="btn btn-outline-success mx-3" onClick={()=>{props.toggleMode('success')}}>Green</button>
    <button type="button" className="btn btn-outline-danger mx-3" onClick={()=>{props.toggleMode('danger')}}>Red</button>
    <button type="button" className="btn btn-outline-warning mx-3" onClick={()=>{props.toggleMode('warning')}}>Yellow</button>
    </div> */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light  '} mx-4`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">darkmode </label>
        </div>

      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string

}
