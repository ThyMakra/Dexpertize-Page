import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

export class Header extends Component {
  render() {
    return (
        <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>{this.props.data ? this.props.data.title : 'Loading'}<span></span></h1>
                  <p>{this.props.data ? this.props.data.paragraph : 'Loading'}</p>
                  <Link
                    activeClass="active"
                    className="btn btn-custom btn-lg page-scroll"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
