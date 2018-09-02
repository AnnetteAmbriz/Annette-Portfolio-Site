import React, { Fragment } from "react";

class Thankyou extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Placeholder! */}

        <div className="content">
          <div className="breadcrumb-style-two gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcrumb-content" />
                </div>
              </div>
            </div>
          </div>
          {/* <div class="breadcrumb-area gray-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="breadcrumb-content text-left">
                            <h6 class="page-cat">Thank you for sending me a message!</h6>
                                <h2 class="page-cat">My React.js Project</h2>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

          <div class="single-project-area erika-standard-row">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="single-port-img single-project-slider" />
                </div>
                <div class="col-lg-9 col-md-8 col-sm-8">
                  <div style={{ textAlign: "center"}} class="single-project-description">
                    <br />
                    
                    <h1 class="single-project-title">
                      Thanks for logging in {this.props.name}! 
                    </h1>
                    <p>
                      
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <br /> 
                    </div>
                    <div class="col-md-6">
                      
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                  <div class="project-meta-wrapper">
                    <h4 style={{ textAlign: "center"}} class="widget-title">More Ways To Connect</h4>
                    <ul class="single-portfolio-meta">
                      <li>
                        <span>Women Who Code:</span>
                        <a href="">
                        Meet Ups <i class="ti-arrow-top-right" />
                        </a>
                      </li>
                      <li>
                        <span>Girl Develop It:</span>
                        <a href="">
                        San Francisco Chapter <i class="ti-arrow-top-right" />
                        </a>
                      </li>
                      
                      <li>
                        <span>Github: </span>
                        <a href="">
                          Recent Contributions <i class="ti-arrow-top-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="post-navigation-wrapper">
                    <a href="#" class="post-navigation previous-post">
                      <i class="fa fa-angle-left" />Prev
                    </a>
                    <a href="index.html" class="button-inner-project">
                      <i class="ti-view-grid" />
                    </a>
                    <a href="#" class="post-navigation next-post">
                      Next<i class="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="gray-bg erika-standard-row related-project-list">
            <div style={{ textAlign: "center" }} class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="area-sub-heading">
                    <h4>Related Projects</h4>
                    <p>Other things I've Built at Hackbright</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="related-project-slider">
                  <div class="single-related-project">
                    <div class="single-related-project-wrapper">
                      <div class="project-slide-image">
                        <a
                          href="img/portfolio/related/1.jpg"
                          class="related-gallery"
                        >
                          <i class="ti-search" />
                        </a>
                      </div>
                      <div class="related-project-description">
                        <h4>
                          <a href="#">Ubermelon Website</a>
                        </h4>
                        <ul class="portfolio-cat">
                          <li>
                            <a href="/">Github Repo</a>
                          </li>
                          <li>
                            <a href="/">Check it Out</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="single-related-project">
                    <div class="single-related-project-wrapper">
                      <div class="project-slide-image" />
                      <div class="related-project-description">
                        <h4>
                          <a href="#">Rate Your Movies Site</a>
                        </h4>
                        <ul class="portfolio-cat">
                          <li>
                            <a href="#">Github Repo</a>
                          </li>
                          <li>
                            <a href="#">Check it Out</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intelligent-header-space" />
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

export default Thankyou;
