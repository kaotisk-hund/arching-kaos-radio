import React, { Component } from 'react';
//import './NewComponent.css';
var fetch = require('node-fetch');

class NowPlaying extends Component {
  constructor(props, context) {
  	super(props, context);
/*fetch("https://icecast.arching-kaos.tk/status-json.xsl")
    .then(res => res.json())
    .then(json => this.state({
      icestats : json.icestats,
      source : json.icestats.source,
      genre : json.icestats.source.genre,
      title : json.icestats.source.title,
      artist :  json.icestats.source.artist
    }));*/
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
  	fetch("https://icecast.arching-kaos.tk/status-json.xsl")
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
  	setInterval(this.timerTick, 10000);
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
