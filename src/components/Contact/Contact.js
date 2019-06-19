import React, { Component } from "react";
import "./Contact.css";
import ContactForm from "../ContactForm/ContactForm";
import GoogleMap from "../GoogleMap/GoogleMap";
import GoogleMapData from "../../data/GoogleMapData";

export default class Contact extends Component {
  state = {
    activeTab: 0,
    ...GoogleMapData[0]
  };

  setActiveTab = activeTab => {
    this.setState({ activeTab, ...GoogleMapData[activeTab] });
  };

  getMapTabClassName = index => {
    let className = "google__map-tab";

    if (index === this.state.activeTab) {
      className += " active";
    }

    return className;
  };

  render() {
    let { position, zoom, name } = this.state;

    return (
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="heading-2 mb-4">Contact</h2>

          <div className="contact__info mt-2 mb-2">
            <div className="contact__info__item contact__quote mb-3">
              <span>"Once you see results, it becomes an addiction."</span>
            </div>

            <ContactForm
              formClassName={"form-default contact__info__item mb-3"}
            />
          </div>
          <div className="google__map-tabs">
            {GoogleMapData.map((item, index) => (
              <span
                className={this.getMapTabClassName(index)}
                key={index}
                onClick={() => this.setActiveTab(index)}
              >
                {item.shortName}
              </span>
            ))}
          </div>
          <div className="google__map-container">
            <GoogleMap position={position} zoom={zoom} name={name} />
          </div>
        </div>
      </section>
    );
  }
}
