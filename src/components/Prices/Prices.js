import React, { Component } from "react";
import "./Prices.css";
import PlanBox from "./PlanBox/PlanBox";

export default class Prices extends Component {
  render() {
    return (
      <section className="prices" id="prices">
        <div className="container">
          <div className="prices__container">
            <div className="prices__description">
              <h2 className="heading-1 prices__heading">Pricing Plans</h2>
              <p className="default-description mt-2 mb-2">
                Are you tired of regular, repetitive program at the gym? Make a
                change, come to Zumbaaa or Jumping classes! I promise you will
                never get bored here!
              </p>
            </div>
            <div className="plans">
              <PlanBox
                brandImg={process.env.PUBLIC_URL + "/assets/zumba-brand.png"}
                brandAlt={"zumba brand"}
                title={"Zumba"}
                dayPrice={"5"}
                monthPrice={"50"}
                currency={"€"}
                quote={"Life is happier when you dance"}
              />
              <PlanBox
                brandImg={process.env.PUBLIC_URL + "/assets/jump-brand.png"}
                brandAlt={"jump brand"}
                title={"Jump"}
                dayPrice={"7"}
                monthPrice={"70"}
                currency={"€"}
                quote={"Those who don't jump will never fly"}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
