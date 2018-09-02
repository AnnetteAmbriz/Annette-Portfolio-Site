import React, { Fragment } from "react";

class Header extends React.Component {
  goToContactForm = event => {
    this.props.history.push(`/contactform`);
  };
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

        <body>
          <header class="header-area header-style-two intelligent-header">
            <div className="erika-standard-row white-bg">
              <div className="col-md-9 col-md-10 ">
                <div className="menu-area">
                  <nav>
                    <li> </li>
                    <h2 className="myfooter-logo">
                      <div>
                        {" "}
                        <a href="/"> annette </a>
                      </div>
                    </h2>
                    <ul class="main-menu">
                      {/*  <li><a href="/">Home</a></li> */}
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/aboutme">About Me</a>
                      </li>
                      <li>
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="/contactform">Contact Me</a>
                      </li>
                      <li>
                        <a href="/login">Log In</a>
                      </li>
                      <li />
                      <li />
                    </ul>
                  </nav>
                  <h3 className="footer-logo">
                  welcome {this.props.name} 
                  </h3>
                  <h4></h4>
                </div>
              </div>
            </div>
          </header>
          <div class="intelligent-header-space" />
        </body>
      </Fragment>
    );
  }
}

export default Header;
