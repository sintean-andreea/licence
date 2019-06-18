import React, { Component } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

export default class Navbar extends Component {
  render() {
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
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about">About</a>
          </li>
          <li className="navbar__item">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="navbar__item">
            <a href="#events">Events</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Sidebar />
      </nav>
    );
  }
}
