import React, { Component } from "react";
import "./PlanBox.css";

export default class PlanBox extends Component {
  render() {
    return (
      <div className="plans__box">
        <div className="plans__title mb-3">{this.props.title}</div>
        <div className="plans__separator">
          <div className="plans__separator__item plans__separator__item--left">
            <div className="plans__day">One day</div>
            <div className="plans__price plan__price--day">
              {this.props.dayBill}
            </div>
            <div className="plans__session">1 session</div>
          </div>
          <div className="plans__separator__item plans__separator__item--right">
            <div className="plans__month">One month</div>
            <div className="plans__price plan__price--month">
              {this.props.monthBill}
            </div>
            <div className="plans__session">10 sessions</div>
          </div>
        </div>
        <div className="plans__quote-container mt-4">
          <quote className="plans__quote">{this.props.quote}</quote>
        </div>
      </div>
    );
  }
}
