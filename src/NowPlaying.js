import React, { Component } from 'react';
//import './NewComponent.css';
var fetch = require('node-fetch');

class NowPlaying extends Component {
  constructor(props, context) {
  	super(props, context);

  	this.state = {
  		icestats: null,
  		source: null,
      genre: null,
      title: null,
      artist: null
  	}

    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
  	fetch("http://radio.arching-kaos.tk:8000/status-json.xsl")
  	.then(res => res.json())
    .then(json => this.setState({
      icestats : json.icestats,
      source : json.icestats.source,
      genre : json.icestats.source.genre,
      title : json.icestats.source.title,
      artist :  json.icestats.source.artist
    }));
  }

  componentDidMount() {
  	setInterval(this.timerTick, 1000);
  }

  render() {
    return (
      <div className="NowPlaying">
        {this.state.artist} - {this.state.title}
      </div>
    );
  }
}

export default NowPlaying;