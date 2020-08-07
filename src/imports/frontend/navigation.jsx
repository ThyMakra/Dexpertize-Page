import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';


export class Navigation extends Component {
  render() {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container"> 
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            <a className="navbar-brand page-scroll" href="#page-top">Dexpertize</a> </div>
          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link
                activeClass="active"
                className="page-scroll"
                to="solution"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>Our Solution</Link>
              </li>
              <li><Link
                activeClass="active"
                className="page-scroll"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>Product {"&"} Service</Link>
              </li>
              {/* <li><Link
                activeClass="active"
                className="page-scroll"
                to="personality"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>Products</Link>
              </li> */}
              <li><Link
                activeClass="active"
                className="page-scroll"
                to="about_us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>About Us</Link>
              </li>
              {/* <li><a href="#testimonials" className="page-scroll">Testimonials</a></li> */}
              {/* <li><a href="#team" className="page-scroll">Team</a></li> */}
              
              <li><Link
                activeClass="active"
                className="page-scroll"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
