import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Solution from './solution';
import About from './about';
import AboutUs from './about_us';
import Personality from './personality';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Cards from './cards';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Solution data={this.state.resumeData.Solution}/>
        <About  data={this.state.resumeData.About}/>
        {/* <AboutUs  data={this.state.resumeData.About}/> */}
        {/* <Gallery /> */}
        {/* <Personality  data={this.state.resumeData.Personality}/> */}
        {/* <Testimonials  data={this.state.resumeData.Testimonials}/> */}
        {/* <Team  data={this.state.resumeData.Team}/> */}
        <Cards data={this.state.resumeData.Cards}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
