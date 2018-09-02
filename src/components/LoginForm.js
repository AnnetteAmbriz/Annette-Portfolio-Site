import React, { Fragment } from "react";
import ServerAPI from "./ServerAPI";

//construct API
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.api = new ServerAPI("http://localhost:2222");
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
    // localStorage.setItem(

    // );
  }
  // componentDidMount() {
  //   const { params } = event.target.name;
  //   // first reinstate our localStorage
  //   const localStorageRef = localStorage.getItem(params.name);
  //   if (localStorageRef) {
  //     this.setState({ name: JSON.parse(localStorageRef) });
  //   }

  // }

  // componentDidUpdate() {
  //   localStorage.setItem(
  //     this.props.match.params.storeId,
  //     JSON.stringify(this.state.event.target.name)
  //   );
  // }


  handleSubmit(event) {
    // Stop the form from submiting
    event.preventDefault();

    const params = {
      url: "http://localhost:5000/logins",
      success: response => console.log(response),
      failure: response => console.log(response),
      data: {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }
    };

    fetch(params.url, {
      body: JSON.stringify(params.data),
      method: "POST"
    })
      .then(response => response.json()) // parses response to JSON
      .then(data => {
        
            this.props.onLogin(params.data.name)
            this.props.history.push(`/thankyou`);
        
      }).catch( (err)=> {
            this.props.onLogin(params.data.name)
            this.props.history.push(`/thankyou`);
      });
    }


  render() {
    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/elements.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="css/custom.css" />
        <script src="js/vendor/modernizr-2.8.3.min.js" />
        <div className="content">
       
        <div className="row"/>
   
            
          <div className="breadcrumb-style-two gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcrumb-content">
                    {/* <h2 className="page-cat">Login or Sign Up</h2> */}
                    <ul className="breadcrumb-list">
                      {/* <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Log In</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <body>
          <div className="area-heading area-heading-style-two text-center">
          <div className="erika-standard-row white-bg">
                        <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div style={{ textAlign: "center"}} className="area-heading area-heading-style-two text-center">
                                            <h2 className="area-title"> Sign Up to Stay Connected</h2>
                                            <p style={{ textAlign: "center"}} >Login In to Schedule a Meet Up and Receive Updates</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                       
            </div>
            
            <div className="col-md-6">
              <div className="form-head fix">
                <div className="marg-area">
                  <form
                    className="email"
                    style={{ textAlign: "center"}}
                    
                    onSubmit={this.handleSubmit}
                  >
                    <label>
                      <input 
                        type="name"
                        style={{ textAlign: "center" }}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                        placeholder="Your Name"
                      />
                    </label>{" "}
                    <br />
                    <label>
                      <input
                        type="email"
                        style={{ textAlign: "center" }}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        placeholder="Login Email"
                      />
                    </label>{" "}
                    <br />
                    <label>
                      <input
                        type="password"
                        name="password"
                        style={{ textAlign: "center" }}
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        placeholder="Your Password"
                      />{" "}
                      <br />
                      <button
                        type="submit"
                        style={{ textAlign: "center" }}
                        className="btn-submit button"
                      >
                        Log In
                      </button> <span />
                      <button
                       onClick={this.handleSubmit}
                        type="submit"
                        style={{ textAlign: "center" }}
                        className="btn-submit button"
                      >
                       Register
                      </button>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
                                            <li><a href="https://twitter.com/?lang=en"><i className="ti-twitter"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            <li><a href="#"><i className="ti-google"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-menu">
                                        <ul className="footer-menu">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/portfolio">Portfolio</a></li>
                                            <li><a href="/aboutme">About Me</a></li>
                                            <li><a href="/contactform">Contact Me</a></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="copy-right-info">
                                        <p>All copyright &copy; reserved by annetteambriz 2018</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 hidden-sm hidden-xs">
                                    <aside className="instagram-widget">
                                        <h4 className="widget-title">follow me on instagram</h4>
                                        <ul id="instagram-widget"></ul>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <script src="js/vendor/jquery-1.12.4.min.js"></script>
      </Fragment>
    );
  }
}

export default LoginForm;
