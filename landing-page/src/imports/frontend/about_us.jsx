import React, { Component } from 'react'

export class AboutUs extends Component {
  render() {
    return (
        <div id="about_us">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/logo.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about_us-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Digital Transformation Provider</h3>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
