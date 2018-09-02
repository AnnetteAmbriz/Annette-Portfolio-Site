import React, { Fragment } from "react";
import ServerAPI from "./ServerAPI";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.api = new ServerAPI("http://localhost:2222");
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitForm = event => {
    // Stop the form from submiting
    event.preventDefault();
    // get the message from the form:
    //create ref, bind event to ref,
    //
    

    alert("Your Message Has Been Sent to Annette!");

    // 3. Change the page to /confirm/
    this.props.history.push(`/confirm`);
  };
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // Stop the form from submiting
    event.preventDefault();
    const params = {
      url: "/message",
      success: response => console.log(response),
      failure: response => console.log(response),
      data: {
        subject: this.state.subject,
        message: this.state.message
      }
    };
    debugger;
    this.api.postJson(params);

    // get the message from the form
    alert(this.state.subject);
    alert(this.state.mess);
  }

  render() {
    return (
      <Fragment>
        {/* comments in JSX! */}
        <body>
          <div className="content">
            <div className="breadcrumb-style-two gray-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="breadcrumb-content">
                      {/* <h2 className="page-cat">Contact Me</h2>
                                            <ul className="breadcrumb-list">
                                                <li><a href="/">Home</a></li>
                                                <li>Contact Me</li>
                                            </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="erika-standard-row white-bg">
            <div classNaome="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="area-heading area-heading-style-two text-center">
                    {/*<h5>Contact Me</h5>
                                    <div className="breadcrumb-content text-left">
                                        <ul className="breadcrumb-list">
                                            <li><a href="/">Home</a></li>
                                            <li>Contact Me</li>
                                        </ul>
                                        </div><br></br>*/}
                                        
                    <div className="row">
                      <div className="contact-page-area">
                        <div className="col-md-6">
                          <div className="form-head fix">
                            <div className="marg-area">
                              <div className="row">
                                <div className="area-heading area-heading-style-two text-center">
                                
                                  <h2
                                    className="area-title"
                                    style={{ textAlign: "center" }}
                                  >
                                    Say Hello
                                  </h2>
                                  <p className="form-head fix">
                                    Send Me A Message Of An Interesting Variety
                                  </p>{" "}
                                  <br />
                                  <form
                                    className="contactForm"
                                    onSubmit={this.submitForm}
                                    method="POST"
                                    className="contcat-form  text-center"
                                  >
                                    <input
                                      type="text"
                                      name="your_subject"
                                      value={this.state.subject}
                                      onChange={this.handleChange}
                                      required
                                      placeholder="Your Subject"
                                    />
                                    <div className="col-md-6">
                                      <div className="message-box-area">
                                        <textarea
                                          name="message"
                                          value={this.state.message}
                                          onChange={this.handleChange}
                                          className="text-area"
                                          cols="30"
                                          rows="10"
                                          placeholder="Message"
                                          required
                                        />
                                        <button
                                          type="submit"
                                          className="btn-submitt button"
                                          value="Send message"
                                        >
                                          Send Message
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <p />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-price-table text-center">
          <div className="prising-head"> </div></div>
          <script src="js/vendor/jquery-1.12.4.min.js" />
          <script src="js/vendor/bootstrap.min.js" />
          <script src="js/plugins.js" />
          <script src="js/jquery.isotope.js" />

          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8hjTJwTaYk3q7ccXZ9SNl5F9Ey6UPEhg" />
          <script src="js/erika.google.map.js" />

          <script src="js/main.js" />
        </body>
        <footer className="footer-area text-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8">
                <div className="footer-fun-text">
                  <p className="area-title">Follow Me</p>
                  <p>My social profile links.</p>
                </div>
                <div className="social-bookmark-wrapper">
                  <ul className="social-bookmark">
                    <li>
                      <a href="https://twitter.com/?lang=en">
                        <i className="ti-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-google" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <ul className="footer-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/aboutme">About Me</a>
                    </li>
                    <li>
                      <a href="/contactform">Contact Me</a>
                    </li>
                  </ul>
                </div>
                <div className="copy-right-info">
                  <p>All copyright &copy; reserved by annetteambriz 2018</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 hidden-sm hidden-xs">
                <aside className="instagram-widget">
                  <h4 className="widget-title">follow me on instagram</h4>
                  <ul id="instagram-widget" />
                </aside>
              </div>
            </div>
          </div>
        </footer>
        <script src="js/vendor/jquery-1.12.4.min.js" />
      </Fragment>
    );
  }
}

export default ContactForm;
