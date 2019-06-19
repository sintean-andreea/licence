import React, { Component } from "react";
import "./Calendar.css";
import { Link } from "react-scroll";
import CalendarData from "../../data/CalendarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default class Calendar extends Component {
  state = {
    activeTab: 0,
    ...CalendarData[0]
  };

  setActiveTab = activeTab => {
    this.setState({ activeTab, ...CalendarData[activeTab] });
  };

  getCalendarTabClassName = index => {
    let className = "calendar__tab";

    if (index === this.state.activeTab) {
      className += " active";
    }

    return className;
  };

  render() {
    return (
      <div className="calendar" title={this.props.title}>
        <div className="calendar__tabs mt-3 mb-2">
          {CalendarData.map((item, index) => (
            <div
              key={index}
              className={this.getCalendarTabClassName(index)}
              onClick={() => this.setActiveTab(index)}
            >
              <h3 className="calendar__tab-title">{item.day}</h3>
            </div>
          ))}
        </div>
        {this.state.rows.map((row, index) => (
          <div key={index} className="calendar__row">
            <div className="calendar__column calendar__column--label">
              {row.name}
            </div>
            <div className="calendar__column calendar__column--hours center-text">
              <FontAwesomeIcon icon={faClock} />
              {row.hours}
            </div>
            <div className="calendar__column calendar__cta right-text">
              <Link
                className="btn-default btn-default--outline"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
              >
                {this.props.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
