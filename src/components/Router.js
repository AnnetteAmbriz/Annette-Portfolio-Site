import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import App from "./App";
import ContactForm from "./ContactForm";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/contactform" compenent={ContactForm} />
        </Switch>
    </BrowserRouter>
);

export default Router;