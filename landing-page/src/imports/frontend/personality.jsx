import React, { Component } from 'react'

export class Personality extends Component {
  render() {
    return (
        <div id="personality" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Personality & Uniqueness</h2>
            <p>We strive to become a positive community to be perceived with these personalities by focusing on our unique traits.</p>
          </div>
          <div className="row">

          {this.props.data ? this.props.data.map(d => 
              <div className="col-md-6"> <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ): 'loading'}
          
           
          
        
            </div>
          </div>
        </div>
    )
  }
}

export default Personality
