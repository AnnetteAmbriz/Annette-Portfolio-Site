import React, { Fragment } from 'react';
import ServerAPI from "./ServerAPI";

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.api = new ServerAPI("http://localhost:2222")
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    submitForm = event => {
        // Stop the form from submiting
        event.preventDefault();
        // get the message from the form:
        //create ref, bind event to ref, 
        //
        alert(this);
        console.log(this.event.target.value);
        
    };
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
        const params = {
            url: "/message",
            success: response => console.log(response),
            failure: response => console.log(response),
            data: {
                subject: this.state.subject,
                message: this.state.message
            }
        }
        debugger
        this.api.postJson(params)

        // get the message from the form
        alert(this.state.subject);
        alert(this.state.mess);
        
    }

    render() {
        return (
            <Fragment>
                { /* comments in JSX! */ }
                <div className="content">
                        <div className="breadcrumb-style-two gray-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="breadcrumb-content">
                                            <h2 className="page-cat">Contact Me</h2>
                                            <ul className="breadcrumb-list">
                                                <li><a href="/">Home</a></li>
                                                <li>Contact Me</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>     
                
                <div className="erika-standard-row white-bg">
                    <div classNaome="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="area-heading area-heading-style-two text-center">
                                { /*<h5>Contact Me</h5>
                                    <div className="breadcrumb-content text-left">
                                        <ul className="breadcrumb-list">
                                            <li><a href="/">Home</a></li>
                                            <li>Contact Me</li>
                                        </ul>
                                        </div><br></br>*/ }
                                        <div className="row">
                                            <div className="contact-page-area">
                                                <div className="col-md-6">
                                                    <div className="form-head fix">
                                                        <div className="marg-area">
                                                            <div className="row">
                                                            <div className="area-heading area-heading-style-two text-center">
                                                                <h2 className="area-title" style={{textAlign:"center"}}>Say Hello</h2>
                                                                <p className="form-head fix">Send Me A Message Of An Interesting Variety</p> <br></br>
                                                                <form className="contactForm" onSubmit={this.submitForm} method="POST" className="contcat-form  text-center">
                                                                <input 
                                                                type="text" 
                                                                name="your_subject"
                                                                value={this.state.subject} onChange={this.handleChange} 
                                                                required placeholder="Your Subject" /> 
                                                                    <div className="col-md-6">
                                                                        <div className="message-box-area">
                                                                            <textarea 
                                                                            name="message" 
                                                                            value={this.state.message} onChange={this.handleChange} 
                                                                            className="text-area" cols="30" rows="10" 
                                                                            placeholder="Message" required></textarea>
                                                                            <button type="submit" className="btn-submitt button" value="Send message">Send Message</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactForm;