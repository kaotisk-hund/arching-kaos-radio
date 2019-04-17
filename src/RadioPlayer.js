import React, { Component } from 'react';
import Player from './Player';
//import './NewComponent.css';

class RadioPlayer extends Component {
  render() {
    return (
      <div className="RadioPlayer">
        <Player audioSource={this.props.audioSource}/>
      </div>
    );
  }
}


export default RadioPlayer;