import React, { Component } from "react";
import "./Bubble.css";

export default class Bubble extends Component {
  state = {
    left: this.props.left
  };

  startAnimation = () => {
    setInterval(() => {
      let left = this.state.left - 1;
      if (left < -250) {
        left = 2100;
      }
      this.setState({ left });
    }, 50);
  };

  componentDidMount() {
    this.startAnimation();
  }

  render() {
    return (
      <div
        className="bubbles__bubble"
        style={{
          left: this.state.left + "px",
          top: this.props.top + "%"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
