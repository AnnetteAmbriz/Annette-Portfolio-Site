import React, { Fragment } from "react";

class Header extends React.Component {
    render() {
        return(
            <Fragment>
            <div class="wrapper">
            <header class="header-area header-style-one intelligent-header">
                <div class="header-middle-area">
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
                                                
                                                <li><a href="index.html">Projects </a></li>
                                                
                                            <li><a href="about-us.html">about</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                        <div class="col-md-3  col-sm-2 col-xs-6"></div>
                                </nav>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </header>
                </div>
            <div class="intelligent-header-space"></div>
        </Fragment>
        )
    }
}

export default Header;