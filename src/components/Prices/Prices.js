import React, { Component } from "react";
import "./Prices.css";
import PlanBox from "./PlanBox/PlanBox";

export default class Prices extends Component {
  render() {
    return (
      <section className="prices mb-4 mt-5" id="prices">
        <div className="container">
          <h2 className="heading-2 prices__heading-2">Pricing Plans</h2>
          <div className="plans mt-3">
            <PlanBox
              title={"Zumba"}
              dayBill={"5€"}
              monthBill={"50€"}
              quote={"Life is happier when you dance"}
            />
            <PlanBox
              title={"Jump"}
              dayBill={"7€"}
              monthBill={"70€"}
              quote={"Those who don't jump will never fly"}
            />
          </div>
        </div>
      </section>
    );
  }
}
