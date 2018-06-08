import React, { Fragment } from "react";

class Header extends React.Component {
    goToContactForm = event => {
        this.props.history.push(`/contactform`);
    };
    render() {
        return(
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
            <header class="header-area header-style-one intelligent-header">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3  col-sm-2 col-xs-6">
                                <div class="logo">
                                    <h4><a href="/">annette ambriz</a></h4>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-10 hidden-xs hidden-sm">
                                <div class="menu-area">
                                    <nav>
                                        <ul class="main-menu clearfix">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">Portfolio</a> </li>
                                                
                                                <li><a href="index.html">Projects</a></li>
                                                
                                            <li><a href="/aboutme">About Me</a></li>
                                            <li><a href="/contactform">Contact Me</a></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                </nav>
                            </div>
                            </div>
                        </div>
                    
                </div>
                </header>
                
            <div class="intelligent-header-space"></div>
            </body>
        </Fragment>
        )
    }
}

export default Header;