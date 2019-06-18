import React, { Component } from "react";
import "./Sidebar.css";
import Toggle from "../Toggle";

export default class Sidebar extends Component {
  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <React.Fragment>
            <div className="sidebar__hamburger" onClick={toggle}>
              <span href="#" />
            </div>
            {on && (
              <div className="sidebar">
                <ul>
                  <li className="sidebar__item active">
                    <a className="active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="sidebar__item">
                    <a href="#about">About</a>
                  </li>
                  <li className="sidebar__item">
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li className="sidebar__item">
                    <a href="#events">Events</a>
                  </li>
                  <li className="sidebar__item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </React.Fragment>
        )}
      </Toggle>
    );
  }
}
