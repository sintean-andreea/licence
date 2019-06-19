import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    message: "",
    showSubmitMessage: false
  };

  handleSubmit = e => {
    e.preventDefault();
    let emailSentSuccessfully = true; // For testing purposes

    if (emailSentSuccessfully) {
      this.setState({ showSubmitMessage: true });
    }
  };

  handleInputChange = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  render() {
    const { first, last, email, message, showSubmitMessage } = this.state;
    const submitMessage = (
      <div className="form-default__submit-msg contact__info__item mb-3">
        Thank you {first} for contacting me! Your message has been sent!
      </div>
    );

    return showSubmitMessage ? (
      submitMessage
    ) : (
      <form
        onSubmit={this.handleSubmit}
        className={this.props.formClassName}
        id="form"
      >
        <div className="form-default__separator">
          <div className="form-default__control">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              value={first}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-default__control">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              value={last}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-default__control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleInputChange}
            required
            placeholder="example@example.com"
          />
        </div>
        <div className="form-default__control">
          <label htmlFor="message">Your message goes here</label>
          <textarea
            type="textarea"
            id="message"
            rows="6"
            value={message}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-default__control">
          <input
            className="form-default__submit-btn btn-default"
            type="submit"
            id="submit"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}
