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
        <Bubble left={80} top={33}>
          Happiness = Zumba
        </Bubble>
        <Bubble left={110} top={66}>
          Let Zumba Fitness be your stress reliever
        </Bubble>
        <Bubble left={240} top={100}>
          No pain no gain!
        </Bubble>
        <Bubble left={320} top={0}>
          Be healthy!
        </Bubble>
        <Bubble left={400} top={33}>
          Don't be afraid of being a beginner
        </Bubble>
        <Bubble left={480} top={66}>
          You see sweat, I see a sexy glow!
        </Bubble>
        <Bubble left={560} top={100}>
          Girl! You got this!
        </Bubble>
        <Bubble left={640} top={0}>
          Therapy is in the gym
        </Bubble>
        <Bubble left={830} top={66}>
          YOU CAN DO IT
        </Bubble>
        <Bubble left={880} top={100}>
          Go To The Gym
        </Bubble>
        <Bubble left={960} top={0}>
          It dosen't get easier. You just get stronger.
        </Bubble>
        <Bubble left={900} top={33}>
          Come to my team! Together we are the winner!
        </Bubble>
        <Bubble left={1120} top={66}>
          You Only Live Once!
        </Bubble>
        <Bubble left={1200} top={100}>
          Train Hard
        </Bubble>
        <Bubble left={1550} top={0}>
          Zumba Time
        </Bubble>
        <Bubble left={1500} top={33}>
          Go Run
        </Bubble>
        <Bubble left={1440} top={66}>
          Get fit!
        </Bubble>
        <Bubble left={1520} top={100}>
          Yes you can!
        </Bubble>
        <Bubble left={1900} top={0}>
          Keep Going
        </Bubble>
        <Bubble left={1680} top={33}>
          Happiness!
        </Bubble>
        <Bubble left={1840} top={100}>
          A little progress each day adds up to big results
        </Bubble>
        <Bubble left={1650} top={66}>
          Time to Change!
        </Bubble>
        <Bubble left={1920} top={33}>
          Train like a Beast look like a Beauty
        </Bubble>
        <Bubble left={1960} top={66}>
          It's fun, it's fitness, it's Zumba!
        </Bubble>
      </div>
    );
  }
}
