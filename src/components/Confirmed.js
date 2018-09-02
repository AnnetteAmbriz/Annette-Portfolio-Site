import React, { Fragment } from "react";

class Confirmed extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Placeholder! */}
        <div class="intelligent-header-space" />
            <div class="intelligent-header-space" />
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="breadcrumb-content text-left">
                  <h2 class="page-cat">Thanks for Sending Me a Message!</h2>
                 
                </div>
              </div>
            </div>
          </div>
        
        <div class="erika-standard-row gray-bg">
          <div class="container">
            <div class="row">
              {/* <div class="col-lg-9 col-lg-push-3 col-md-8 col-md-push-4 col-sm-12"> */}
                <article class="single-post single-blog-post-area">
                  <div class="post-content">
                    <h2 class="blog-post-title">
                    Read More About How I built This Site
                    </h2>
                    <div class="post-meta">
                     
                    </div>
                    <p>
                    Using React.js and the latest frontend frameworks Annette created a dynamic Single Page Web Application. 
The end result; is a full-stack personal website that uses isolated React components to highlight Annette's skills and interests. Her personal website project has laid the foundation for her understanding of the modern web and how companies are creating efficiency in deploying sites and mobile applications. Post Hackbright, she plans to deploy her site using Firebase and opensource her project for others to reuse for their own personal websites.</p>
                                
                   
                    <div class="row">
                      <div class="col-md-6">
                        <div class="inner-image" />
                      </div>
                      <div class="col-md-6">
                        <div class="inner-image" />
                      </div>
                    </div>
                    <h4>Frameworks 'n Things</h4>
                    <ul>
                      <li>React.js </li>
                      <li>JSX</li>
                      <li>Node.js</li>
                      <li>Webpack</li>
                      <li>Python</li>
                    </ul>
                    <h4>You should Also Read</h4>
                    <p>
                      {" "}
                      Hello From the Magic Tavern - Arnie Niekamp fell through a dimensional portal
                            behind a Burger King into the fantastical land of
                            Foon. He's still getting a slight wifi signal, so he
                            uploads a weekly podcast from the tavern the
                            Vermilion Minotaur where he interviews wizards,
                            monsters and adventurers. It's a major discovery!
                    </p>
                    <blockquote>
                    Magic and Lore. What's not to love.
                    </blockquote>
                    <pre />
                    <p>
                    
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        {/* </div> */}
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
        <script src="js/vendor/bootstrap.min.js" />
        <script src="js/plugins.js" />
        <script src="js/jquery.isotope.js" />
        <script src="js/main.js" />
      </Fragment>
    );
  }
}

export default Confirmed;
