import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__social mb-2">
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="footer__social-link">
                <FontAwesomeIcon icon={faMailBulk} />
              </a>
            </div>

            <div className="footer__author">
              <div className="footer__author__item footer__copyright">
                Copyright &copy; 2019
              </div>
              <div className="footer__author__item footer__author-name">
                Made with love by
                <span> Sintean Andreea</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
