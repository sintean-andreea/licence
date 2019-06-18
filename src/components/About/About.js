import React, { Component } from "react";
import Bubbles from "../Bubbles/Bubbles";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <h2 className="heading-2 mt-10 mb-4">My Story</h2>
          <div className="about__content">
            {/* <div className="about__content__item about__img-container mb-2">
              <img
                className="responsive-img m-0-auto"
                src="/assets/about-claudia.jpg"
                alt="claudia"
              />
            </div> */}
            <p className="default-description about__content__item center-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              repudiandae provident voluptatem tenetur, dolores, deleniti
              aliquid eos quaerat neque sit harum. Ipsam possimus voluptatibus
              quos repellat iusto dolorum dicta harum porro autem id repudiandae
              perspiciatis corporis, dolor ab sint magnam quas accusantium
              adipisci quae modi consectetur! Veniam debitis dolore aperiam
              laboriosam iusto. Facilis sint distinctio quae.
            </p>
          </div>
        </div>
        <Bubbles />
      </section>
    );
  }
}
