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
import SliderItem from "../SliderItem/SliderItem";

export default class Gallery extends Component {
  state = {
    visibleSlides: 3
  };

  updateVisibleSlides = () => {
    let visibleSlides;
    visibleSlides = window.innerWidth < 801 ? 1 : 3;
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
            naturalSlideHeight={200}
            totalSlides={9}
            visibleSlides={this.state.visibleSlides}
          >
            <Slider>
              <Slide>
                <SliderItem
                  title="Jump"
                  alt="Jump"
                  src="/assets/gallery/jump.png"
                  description="But natural selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba!"
                  alt="Zumba"
                  src="/assets/gallery/zumba.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba"
                  alt="Zumba"
                  src="/assets/gallery/zumba1.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba"
                  alt="Zumba"
                  src="/assets/gallery/zumba3.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Jump"
                  alt="Jump"
                  src="/assets/gallery/jump.png"
                  description="But natural selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba"
                  alt="Zumba"
                  src="/assets/gallery/zumba2.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba"
                  alt="Zumba"
                  src="/assets/gallery/zumba5.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Zumba"
                  alt="Zumba"
                  src="/assets/gallery/zumba7.png"
                  description="Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Pérez during the 1990s"
                />
              </Slide>
              <Slide>
                <SliderItem
                  title="Jump"
                  alt="Jump"
                  src="/assets/gallery/jump.png"
                  description="But natural selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."
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
