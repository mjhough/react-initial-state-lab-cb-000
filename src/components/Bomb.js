import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    return (
      <p>{this.state.secondsLeft ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!'}</p>
    );
  }
}

export default Bomb;
