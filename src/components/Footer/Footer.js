import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__content__item footer__copyright">
              Copyright &copy; 2019
            </div>
            <div className="footer__content__item footer__author">
              Made with love by
              <span className="footer__author-name"> Sintean Andreea</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
