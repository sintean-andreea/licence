import { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;
    const { toggle } = this;
    return children({ on, toggle });
  }
}
