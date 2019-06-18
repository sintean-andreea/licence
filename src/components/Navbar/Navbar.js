import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

export default class Navbar extends Component {
  render() {
    const scrollOffset = -70;
    return (
      <nav className="navbar">
        <span className="navbar__item navbar__logo">
          <img
            className="responsive-img"
            src="/assets/logo.png"
            alt="Claudia Merkt - logo"
          />
        </span>
        <ul>
          <li className="navbar__item">
            <Link to="home" spy={true} smooth={true} offset={scrollOffset}>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="about" spy={true} smooth={true} offset={scrollOffset}>
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="gallery" spy={true} smooth={true} offset={scrollOffset}>
              Gallery
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="events" spy={true} smooth={true} offset={scrollOffset}>
              Events
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="prices" spy={true} smooth={true} offset={scrollOffset}>
              Prices
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="contact" spy={true} smooth={true} offset={scrollOffset}>
              Contact
            </Link>
          </li>
        </ul>
        <Sidebar />
      </nav>
    );
  }
}
