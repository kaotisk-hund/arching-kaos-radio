import React, { Component } from 'react';
import './ShowList.css';
import Player from './Player'
//import Lists from './lists.json';
var fetch = require('node-fetch');

class ShowList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mixes : [],
      visible : false,
      state: false
    }

    this.timerTick = this.timerTick.bind(this);

  }
  timerTick(){
    fetch("http://{$API_SERVER_NAME}/shows")
    .then(res => res.json())
    .then(json => this.setState({
      mixes: json,
      state: true
    }));
  }

  componentDidMount() {
    setInterval(this.timerTick, 1000);
//    this.render()
  }

  render(state, props) {
    return ( <div id="mixes" className="ShowListContainer">
      <h3 onClick={this.handleMouseDown}>Mixes</h3>
      <div className="ShowList">
        	{this.state.mixes.map(function(obj, idx){
        		return (
              <div className="list-item">
                <div className="list-info" key={idx}>
                  <h4>{obj.artist}</h4>
                  <h5>{obj.title}</h5>
                </div>
        		    <div className="player-container">
                  <Player audioSource={obj.ipfs}/>
                </div>
              </div>)
        	})}
        </div>
      </div>
    )
   }
}

export default ShowList;
