import React, { Component } from "react";
import "./Calendar.css";
import CalendarData from "./CalendarData";

export default class Calendar extends Component {
  state = {
    activeTab: 0
  };

  setActiveTab = activeTab => {
    this.setState({ activeTab });
  };

  getCalendarTabClassName = index => {
    let className = "calendar__tab";

    if (index === this.state.activeTab) {
      className += " active";
    }

    return className;
  };

  render() {
    let data = CalendarData;

    return (
      <div className="calendar" title={this.props.title}>
        <div className="calendar__tabs mt-3 mb-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={this.getCalendarTabClassName(index)}
              onClick={() => this.setActiveTab(index)}
            >
              <h3 className="calendar__tab-title">{item.day}</h3>
            </div>
          ))}
        </div>
        {data.map((item, index) =>
          item.rows.map((row, rowIndex) => {
            if (index === this.state.activeTab) {
              return (
                <div className="calendar__row" key={rowIndex}>
                  <div className="calendar__column calendar__column--label">
                    {row.name}
                  </div>
                  <div className="calendar__column center-text">
                    {row.hours}
                  </div>
                  <div className="calendar__column calendar__cta right-text">
                    <a href="#contact">{this.props.buttonText}</a>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    );
  }
}
