import React, { Component } from "react";
import "./Gallery.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SliderItem from "./SliderItem/SliderItem";

export default class Gallery extends Component {
  state = {
    visibleSlides: 3
  };

  updateVisibleSlides = () => {
    let visibleSlides;
    visibleSlides = window.innerWidth < 601 ? 1 : 3;
    this.setState({ visibleSlides });
  };

  componentDidMount = () => {
    this.updateVisibleSlides();
    window.addEventListener("resize", this.updateVisibleSlides);
  };

  render() {
    return (
      <section className="gallery" id="gallery">
        <div className="container">
          <h2 className="heading-2 mt-15">Gallery</h2>
          <CarouselProvider
            className="gallery__carousel mt-5"
            naturalSlideWidth={100}
            naturalSlideHeight={175}
            totalSlides={9}
            visibleSlides={this.state.visibleSlides}
          >
            <Slider>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Jump"
                  src="/assets/gallery/jump.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumbaaa!!"
                  alt="Zumba"
                  src="/assets/gallery/zumba.png"
                  description="zxc"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba1.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba2.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba3.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba4.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba5.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba6.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="My title"
                  alt="Zumba"
                  src="/assets/gallery/zumba7.png"
                  description="lorem ipsum pune si tu o descriere aici pentru fiecare poza"
                />
              </Slide>
            </Slider>
            <ButtonBack>&lt;</ButtonBack>
            <ButtonNext>&gt;</ButtonNext>
          </CarouselProvider>
        </div>
      </section>
    );
  }
}
