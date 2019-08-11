import React, { Component } from 'react';
//import './NewComponent.css';

class Player extends Component {
  render() {
    return (
      <audio xmlns="http://www.w3.org/1999/xhtml" controls="controls" preload="none" autoPlay >
          <source src={this.props.audioSource} type="application/ogg" />
          Sorry, seems your browser can't open it. Try with VLC-> File -> Open Network Stream and paste this link: {this.props.audioSource}
        </audio>
    );
  }
}

export default Player;