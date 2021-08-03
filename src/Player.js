import React, { Component } from 'react';
//import './NewComponent.css';

class Player extends Component {

constructor(props, context) {
    super(props, context);
    console.log(props)
  }

  render() {
    return (
      <audio xmlns="http://www.w3.org/1999/xhtml" controls="controls" preload="none" autoPlay={false} class={this.props.className}>
          <source src={this.props.audioSource} type="application/ogg" />
          Sorry, seems your browser can't play this.
        </audio>
    );
  }
}

export default Player;