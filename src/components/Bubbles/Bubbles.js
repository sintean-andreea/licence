import React, { Component } from "react";
import "./Bubbles.css";
import Bubble from "./Bubble/Bubble";

export default class Bubbles extends Component {
  render() {
    return (
      <div className="bubbles mt-10">
        <Bubble left={0} top={0}>
          Healthy lifestyle!
        </Bubble>
        <Bubble left={110} top={66}>
          Let Zumba Fitness be your stress reliever!
        </Bubble>
        <Bubble left={400} top={33}>
          You see sweat, I see a sexy glow!
        </Bubble>
        <Bubble left={500} top={100}>
          Girl! You got this!
        </Bubble>
        <Bubble left={600} top={0}>
          Therapy is in the gym
        </Bubble>
        <Bubble left={700} top={66}>
          Jump! Jump! Jump!
        </Bubble>
        <Bubble left={1000} top={100}>
          Go To The Gym!
        </Bubble>
        <Bubble left={900} top={33}>
          Come to my team! Together we are the winner!
        </Bubble>
        <Bubble left={1500} top={100}>
          Happiness = Zumba!
        </Bubble>
        <Bubble left={1200} top={0}>
          Zumba Time!
        </Bubble>
        <Bubble left={1350} top={56}>
          Get fit!
        </Bubble>
        <Bubble left={2000} top={100}>
          Stop saying tomorrow!
        </Bubble>
        <Bubble left={1800} top={0}>
          Keep Going!
        </Bubble>
        <Bubble left={1650} top={56}>
          Time to Change!
        </Bubble>
        <Bubble left={1950} top={33}>
          Train like a Beast look like a Beauty!
        </Bubble>
      </div>
    );
  }
}
