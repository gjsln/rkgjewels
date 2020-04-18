import React, { Component } from "react";
import logo from '../../assets/images/rkglogo.png';
import './Navbar.css';
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <img src={logo} alt=''/>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
