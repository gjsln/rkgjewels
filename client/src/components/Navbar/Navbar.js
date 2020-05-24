import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/rkglogo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm top-menu'> 
          <div className='container'>
            <Link to='/'><img src={logo} alt='' /></Link>
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
                  <Link to='/about'>ARTICLES</Link>
                </li>
                <li className='nav-item menu-item'>
                  <Link to='/scheduleAppointment'>SCHEDULE AN APPOINTMENT</Link>
                </li>
                <li className='nav-item menu-item'>
                  <Link to='/contacts'>CONTACT US</Link>
                </li>
                <li className='nav-item menu-item'>
                  <Link to='/get-your-offer'>GET YOUR OFFER</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='navbar-dark bg-dark sub-menu'>
          <ul className='secondary-menu'>
            <li className='menu-item'>
            <Link to='/diamonds'>DIAMONDS</Link>
            </li>
            <li className='menu-item'>
              <Link to='/jewelry'>JEWELRY</Link>
            </li>
            <li className='menu-item'>
              <Link to='/watches'>WATCHES</Link>
            </li>
            <li className='menu-item'>
              <Link to='/about'>ABOUT US</Link>
            </li>
            <li className='menu-item'>
              <Link to='/buyJewelry'>BUY JEWELRY</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
