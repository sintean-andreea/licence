import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";
import Toggle from "../Toggle/Toggle";

export default class Sidebar extends Component {
  render() {
    const scrollOffset = -70;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <React.Fragment>
            <div className="sidebar__hamburger" onClick={toggle}>
              <span />
            </div>
            {on && (
              <div className="sidebar">
                <ul>
                  <li className="sidebar__item">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="sidebar__item">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      About
                    </Link>
                  </li>
                  <li className="sidebar__item">
                    <Link
                      to="gallery"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="sidebar__item">
                    <Link
                      to="events"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      Events
                    </Link>
                  </li>

                  <li className="sidebar__item">
                    <Link
                      to="prices"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      Prices
                    </Link>
                  </li>
                  <li className="sidebar__item">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={scrollOffset}
                    >
                      Contact
                    </Link>
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
