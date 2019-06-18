import React, { Component, Fragment } from "react";
import "./Events.css";
import Calendar from "../Calendar/Calendar";

export default class Events extends Component {
  render() {
    return (
      <section className="events" id="events">
        <div className="container">
          <h2 className="heading-3 events__heading">Upcoming Events</h2>

          <Calendar buttonText="Enjoy it!" />
        </div>
      </section>
    );
  }
}
