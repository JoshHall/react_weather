import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Weather</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="navbar-brand" to="/">Weather</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/sample">Sample</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/racer">Racer Info</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
