import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import App from "./App";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import Home from "./Home";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/contactform" component={ContactForm} />
            <Route path="/aboutme" component={AboutMe} />
        </Switch>
    </BrowserRouter>
);

export default Router;