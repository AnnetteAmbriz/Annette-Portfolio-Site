import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import LoginForm from "./LoginForm";
import MyText from "./MyText";
//import Calendar from "./Calendar";
import Confirmed from "./Confirmed";
import Portfolio from "./Portfolio";
import Thankyou from "./Thankyou";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: " " };
    this.onLogin = this.onLogin.bind(this);
  }

    onLogin(name){
        this.setState({
            name:name    
        });
  }

  render() {
    return (
      <div className="annette-hackbright-project">
        <h4>
          <Header name={this.state.name} />
        </h4>
        <div className="splashpage" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ (props) => <Home onLogin={this.onLogin} {...props}/>} />
            <Route path="/contactform" render={ (props) => <ContactForm {...props}/>} />
            <Route path="/aboutme" render={ (props) => <AboutMe {...props}/>} />
            <Route path="/login" render={ (props) => <LoginForm onLogin={this.onLogin} {...props}/>} />
            <Route path="/mytext" render={ (props) => <MyText onLogin={this.onLogin} {...props}/>} />
            {/*<Route path="/calendar" render={ (props) => <Calendar onLogin={this.onLogin} {...props}/>} />*/}
            <Route path="/confirm" render={ (props) => <Confirmed onLogin={this.onLogin} {...props}/>} />
            <Route path="/portfolio" render={ (props) => <Portfolio onLogin={this.onLogin} {...props}/>} />
            <Route path="/thankyou" render={ (props) => <Thankyou name={this.state.name}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
