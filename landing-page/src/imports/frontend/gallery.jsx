import React, { Component } from 'react'

export class Gallery extends Component {
  render() {
    return (
        <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>KPI Product</h2>
            <p>Take a look at one of our developed management KPI</p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/demo-1.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dexpertize KPI Dashboard</h4>
                    </div>
                    <img src="img/portfolio/demo-1.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/demo-2.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dexpertize KPI Dashboard</h4>
                    </div>
                    <img src="img/portfolio/demo-2.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/demo-3.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dexpertize KPI Dashboard</h4>
                    </div>
                    <img src="img/portfolio/demo-3.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/demo-4.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dexpertize KPI Dashboard</h4>
                    </div>
                    <img src="img/portfolio/demo-4.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
