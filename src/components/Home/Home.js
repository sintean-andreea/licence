import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="container">
          <div className="home__quote">
            "Your body is your most priceless possession take care of it!"
          </div>
        </div>
      </section>
    );
  }
}
