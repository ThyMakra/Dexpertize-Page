import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title text-center">
            <h2>Our Product</h2>
          </div>
          <div className="row">
            
            <div className="col-md-6">
              <div className="about-text">
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Data Collection and Digitalization Service</h3>
                <div className="list-style">
                    <ul>
                      {this.props.data ? this.props.data.Why.map(d => <li>{d}</li>) : 'loading'}
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6"> <img src="img/about-1.png" className="img-responsive" alt=""/> </div>

        

            <div className="col-md-6"> <img src="img/about-2.svg" className="img-responsive" alt=""/> </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="about-text">
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>KPI Implementation Service</h3>
                <div className="list-style right" >
                    <ul>
                      {this.props.data ? this.props.data.Why2.map(d => <li>{d}</li>) : 'loading'}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
