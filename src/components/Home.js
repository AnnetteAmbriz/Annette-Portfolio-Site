import React, { Fragment } from "react";

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content=""></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>    
                <link rel="stylesheet" href="css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="css/themify-icons.css"></link>
                <link rel="stylesheet" href="css/elements.css"></link>
                <link rel="stylesheet" href="style.css"></link>
                <link rel="stylesheet" href="css/responsive.css"></link>

                <link rel="stylesheet" href="css/custom.css"></link>
                <script src="js/vendor/modernizr-2.8.3.min.js"></script>
            
            <body> 
                   <div>
                   <div class="intelligent-header-space"></div>
                    <div class="slider-area static-dotted-bg" id="particle-ground">
                    
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="banner-static-content text-center">
                                        <h1 class="cd-headline clip is-full-width">
                                                <span>I am</span> <br></br>
                                                <span class="cd-words-wrapper">
                                                    <b class="is-visible">Annette</b><br></br>
                                                    <b class="is-visible">Ambriz</b>

                                                    
                                                </span>
                                            </h1>
                                        <p>Placeholder to say something.</p>
                                        <a href="/contactform" class="button active-btn">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <footer className="footer-area text-left">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-8">
                                    <div className="footer-fun-text">
                                        <h3 className="footer-logo"><a href="/">Annette</a></h3>
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
                   
    
                </body>
                </Fragment>  
        )
    }
}

export default Home;