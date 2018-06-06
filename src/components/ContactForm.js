import React, { Fragment } from 'react';


class ContactForm extends React.Component{
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }
    userInput = React.createRef();

    submitForm = event => {
        // Stop the form from submiting
        event.preventDefault();
        // get the message from the form:
        //create ref, bind event to ref, 
        //
        alert(this);
        console.log(this.userInput.value.value);
        
    };

    render() {
        return (
            <Fragment>
                { /* comments in JSX! */ }                
                <div className="erika-standard-row white-bg">
                    <div classNaome="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="area-heading area-heading-style-two text-center">
                                    <h5>Contact Me</h5>
                                    <div className="breadcrumb-content text-left">
                                        <ul className="breadcrumb-list">
                                            <li><a href="/">Home</a></li>
                                            <li>Contact Me</li>
                                        </ul>
                                        </div><br></br>
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
                                                                ref={this.userInput}
                                                                name="your_subject" 
                                                                required placeholder="Your Subject" /> 
                                                                    <div className="col-md-6">
                                                                        <div className="message-box-area">
                                                                            <textarea name="your_message" className="text-area" cols="30" rows="10" placeholder="Message" required></textarea>
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