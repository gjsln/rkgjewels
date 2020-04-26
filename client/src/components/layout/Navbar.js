import React, { Component } from 'react';
import logo from '../../assets/images/rkglogo.png';
import './Navbar.css';
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm top-menu'>
          <div className='container'>
            <img src={logo} alt='' />
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#mobile-nav'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='mobile-nav'>
              <ul className='navbar-nav mr-auto main-menu'>
                <li className='nav-item menu-item'>
                  <a href='#'>ARTICLES</a>
                </li>
                <li className='nav-item menu-item'>
                  <a href='#'>SCHEDULE AN APPOINTMENT</a>
                </li>
                <li className='nav-item menu-item'>
                  <a href='#'>CONTACT US</a>
                </li>
                <li className='nav-item menu-item'>
                  <a href='#'>GET YOUR OFFER</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='navbar-dark bg-dark sub-menu'>
          <ul className='secondary-menu'>
            <li className='menu-item'>
              <a href='#'>DIAMONDS</a>
            </li>
            <li className='menu-item'>
              <a href='#'>JEWELRY</a>
            </li>
            <li className='menu-item'>
              <a href='#'>WATCHES</a>
            </li>
            <li className='menu-item'>
              <a href='#'>ABOUT US</a>
            </li>
            <li className='menu-item'>
              <a href='#'>BUY JEWELRY</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
