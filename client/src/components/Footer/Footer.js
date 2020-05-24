import React, { Component } from 'react'
import './Footer.css';

 class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-container text-white mt-5 p-3 text-center">
          Copyright &copy; {new Date().getFullYear()} RKG Jewelry.
        </footer>
      </div>
    )
  }
}

export default Footer;