import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

init("user_yuPaoaKY3FAYaEGROFvZI");


export class Contact extends Component {
  constructor(props) {
    super(props);
    toast.success("Your message has successfully sent!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("dexpertize_sale_service1", "contact_template1", "contact_form", '')
      .then(
        function (response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
          });
          // send information to own gmail
          emailjs.sendForm("dexpertize_sale_service1", "receiving_information_1", "contact_form", '')
        },
        function (err) {
          toast.error("Your message was not able to be sent");
        }
      );
  };




  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)} id="contact_form"  >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required="required" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="email" name="email"  className="form-control" placeholder="Email" required="required" />
                        
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                    
                  </div>
                  <button type="submit" value="Send" className="btn btn-custom btn-lg">Send Message</button>
                  
                  <ToastContainer style={{"font-family": "sans-serif"}}/>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p><span><i className="fa fa-map-marker"></i> Address</span>{this.props.data ? this.props.data.address : 'loading'}</p>
              </div>
              <div className="contact-item">
                <p><span><i className="fa fa-phone"></i> Phone</span> {this.props.data ? this.props.data.phone : 'loading'}</p>
              </div>
              <div className="contact-item">
                <p><span><i className="fa fa-envelope-o"></i> Email</span> {this.props.data ? this.props.data.email : 'loading'}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li><a href={this.props.data ? this.props.data.linkedin : '/'}><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>&copy; 2020 Presented by Dexpertize Co, Ltd.</p>
          </div>
        </div>
      </div>
    )
  }
}



export default Contact

