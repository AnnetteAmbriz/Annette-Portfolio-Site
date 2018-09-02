import React, { Fragment } from "react";

//import request from 'superagent';
import moment from "react-moment";
//import { getEvents } from "../helpers";

import BigCalendar from "react-big-calendar";

const CALENDAR_ID = "tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com";
const API_KEY = "AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment);

// this weird syntax is just a shorthand way of specifying loaders
//require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css')
function getEvents(callback) {
  fetch(url, {
    method: "GET"
  })
    .then(response => response.json()) // parses response to JSON
    .then(data => {
      console.log(data);

      const events = [];
      data.items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary
        });
      });
      callback(events);
    })
    .catch(err => {
      alert("broken");
    });
}

// request
//   .get(url)
//   .end((err, resp) => {
//     if (!err) {
//       const events = []
//       JSON.parse(resp.text).items.map((event) => {
//         events.push({
//           start: event.start.date || event.start.dateTime,
//           end: event.end.date || event.end.dateTime,
//           title: event.summary,
//         })
//       })
//       callback(events)
//     }
//   })
//}

class Calendar extends React.Component {
  constructor() {
    super();
    console.log("BUTTS")
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    console.log("herre");
    getEvents(events => {
      this.setState({ events });
    });
  }
  render() {
    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/elements.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="css/responsive.css" />

        <link rel="stylesheet" href="css/custom.css" />
        <script src="js/vendor/modernizr-2.8.3.min.js" />

        <body>
          <div>
            {/* Placeholder! */}
            <BigCalendar style={{ height: "420px" }} events={[]} />
          </div>

          <footer className="footer-area text-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-8">
                  <div className="footer-fun-text">
                    <h3 className="footer-logo">
                      <a href="/">Annette</a>
                    </h3>
                    <p>My social profile links.</p>
                  </div>
                  <div className="social-bookmark-wrapper">
                    <ul className="social-bookmark">
                      <li>
                        <a href="https://twitter.com/?lang=en">
                          <i className="ti-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="ti-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="ti-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-menu">
                    <ul className="footer-menu">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="/aboutme">About Me</a>
                      </li>
                      <li>
                        <a href="/contactform">Contact Me</a>
                      </li>
                    </ul>
                  </div>
                  <div className="copy-right-info">
                    <p>All copyright &copy; reserved by annetteambriz 2018</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 hidden-sm hidden-xs">
                  <aside className="instagram-widget">
                    <h4 className="widget-title">follow me on instagram</h4>
                    <ul id="instagram-widget" />
                  </aside>
                </div>
              </div>
            </div>
          </footer>
          <script src="js/vendor/jquery-1.12.4.min.js" />
        </body>
      </Fragment>
    );
  }
}

export default Calendar;
