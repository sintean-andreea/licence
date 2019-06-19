import React, { Component } from "react";
import "./PlanBox.css";

export default class PlanBox extends Component {
  render() {
    return (
      <div className="plans__box mb-2">
        <div className="plan__brand">
          <img
            className="responsive-img"
            src={this.props.brandImg}
            alt={this.props.brandAlt}
          />
        </div>
        <div className="plans__title mb-1">{this.props.title}</div>
        <div className="plans__quote-container mb-2">
          <div className="plans__quote">{this.props.quote}</div>
        </div>
        <div className="plans__separator">
          <div className="plans__separator__item plans__separator__item--left">
            <div className="plans__day">One day</div>
            <div className="plans__price plan__price--day">
              <span className="plans__currency">{this.props.currency}</span>
              <span className="plans__price-value">{this.props.dayPrice}</span>
            </div>
            <div className="plans__session">1 session</div>
          </div>
          <div className="plans__separator__item plans__separator__item--right">
            <div className="plans__month">One month</div>
            <div className="plans__price plan__price--month">
              <span className="plans__currency">{this.props.currency}</span>
              <span className="plans__price-value">
                {this.props.monthPrice}
              </span>
            </div>
            <div className="plans__session">10 sessions</div>
          </div>
        </div>
      </div>
    );
  }
}
