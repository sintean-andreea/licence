import React, { Component } from "react";
import "./SliderItem.css";

export default class SliderItem extends Component {
  state = {
    src: process.env.PUBLIC_URL + "/assets/home-bg.jpg",
  };

  openLightbox = (src) => {
    this.setState({ src });
  };

  render() {
    return (
      <React.Fragment>
        <div className="gallery__carousel__img-container">
          <img
            className="responsive-img"
            onClick={() => this.openLightbox(this.props.src)}
            src={this.props.src}
            alt={this.props.alt}
          />
        </div>
        <h3 className="gallery__carousel__title">{this.props.title}</h3>
        <p className="gallery__carousel__description">
          {this.props.description}
        </p>
      </React.Fragment>
    );
  }
}
