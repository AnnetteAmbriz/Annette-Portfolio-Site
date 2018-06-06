import React from "react";
//construct API
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        // Stop the form from submiting
        event.preventDefault();
        // get the message from the form
        alert(this.state.subject);
        alert(this.state.message);
        
    }
    
    render() {
        return(
            <form className="contactForm" onSubmit={this.handleSubmit}>
                <label>
                <input 
                name="subject"
                value={this.state.subject} onChange={this.handleChange}
                required placeholder="Your Subject" /> 
              </label> <br />
              <label>
                <textarea 
                name="message"
                value={this.state.message} onChange={this.handleChange}
                required placeholder="Your Message" />
                <button type="submit" className="btn-submit button">Send Message</button>
                </label>
                </form>    
        )
    }
}

export default LoginForm;