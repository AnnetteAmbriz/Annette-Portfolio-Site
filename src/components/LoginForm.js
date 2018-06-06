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
        alert(this.state.email);
        alert(this.state.password);
        
    }
    
    render() {
        return(
            <form className="email" onSubmit={this.handleSubmit}>
                <label>
                <input 
                name="email"
                value={this.state.email} onChange={this.handleChange}
                required placeholder="Login Email" /> 
              </label> <br />
              <label>
                <textarea 
                name="password"
                value={this.state.password} onChange={this.handleChange}
                required placeholder="Your Password" />
                <button type="submit" className="btn-submit button">Login In</button>
                </label>
                </form>    
        )
    }
}

export default LoginForm;