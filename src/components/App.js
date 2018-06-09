import React from "react";
import Header from "./Header";
import Home from "./Home";
import MyText from "./MyText";
import LoginForm from "./LoginForm";
import ContactForm from "./ContactForm";

class App extends React.Component {
    render() {
        return (
            <div className="annette-hackbright-project">
                <div className="splashpage">
                    <Header tagline="Annette is cool"/>
                </div>
                <Home />
                 <Header />
                {/*<LoginForm />*/}
                 {/*<ContactForm />
                {/*<Banner />*/}
            </div>
        );
    }
}

export default App;