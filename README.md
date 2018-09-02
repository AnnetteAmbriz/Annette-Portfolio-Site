# Annette's Personal Portfolio Website

Description: Using React.js and the latest frontend frameworks Annette created a dynamic Single Page Web Application.
The end result; is a full-stack personal website that uses isolated React components to highlight Annette's skills and interests. Her personal website project has laid the foundation for her understanding of the modern web and how companies are creating efficiency in deploying sites and mobile applications. Post Hackbright, she plans to deploy her site using Firebase and opensource her project for others to reuse for their own personal websites.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See the short video titled Website Demo.mov for a quick demo without needing to install.

### Prerequisites

What things you need to install the software and how to install them

```
prop-types: ^15.6.0
re-base: 3.2.2
react: ^16.3.0-alpha.1
react-dom: ^16.3.0-alpha.1
react-moment: ^0.7.6
react-router-dom: ^4.2.2
react-transition-group": ^2.2.1
serve: ^6.5.0
stylus: 0.54.5

```

### Installing

A step by step series of examples that tell you how to get a development env running

Create a local virtual environment

```
virtualenv env
source env/bin/activate
```

Install dependencies

```
npm i
npm start
```

## Running the tests

I plan to implement unit tests for this site in later versions


## Deployment

I plan to deploy this site to the web using either Firebase or Netlify

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [PostgreSQL](https://www.postgresql.org/rn) - Open source object-relational database system
* [Python](https://www.python.org/) - Used to make a backend server api

## Versioning

I will use [SemVer](http://semver.org/) for versioning

## Author

* **Annette Ambriz** - *Initial work*


Hi! My name is Annette.

I set out to create a dynamic Single Page Web Application to use as full-stack personal website - using React.js

I’ve learned to set up Webpack, Babel- to compile my project. I’ve learned the nuances of ES6 and the best practice for using Javascript in the modern browser.

It’s not in the recording but if you were to open the developer tools and view the Network tab you could see that there’s has only been one initial request that returned a webpack bundle that has the ability to display all the pages you see in this presentation.

Most importantly, I learned how to store and move data using React’s component based architecture.

The login component you will see in moment, takes the credentials
Makes a single request to my server using the Fetch API,
check the users email, and hashed password against my postgres database.

This will return a response (success/failure. If success), I will convert the response to a json object, grab the usersName value from the json object.

I then call a bound function in my login component passing in the Name value from the response.

This bound function will then set the Name value on the State of my App component.
Finally, then it is then available via Props to the rest of the child components.

As you can see, where I render the name of the user in the Header component.
This is lightning fast because...

React reacts to any changes in a components’ state and recreates it’s virtual DOM (which is something unique to React) and does a diff of the new Virtual dom against the rendered DOM.
Any meaningful differences between the virtual dom and the rendered dom, will be rerendered in the least amount of steps possible using a super cool diffing mechanism also unique to React!

That’s what makes React so fast! It only rerenders changes not the entire page or site!!

I plans to work to deploy my site using Firebase and build open source npm modules to help other software developers integrate APIs with React.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hackbright mentors

