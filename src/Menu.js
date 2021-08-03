/*
 * Kaotisk Hund 2019-2021
 *
 * Menu bar for our webpage
 */

import React, { Component } from "react";
import "./Menu.css";
import logo from './assets/img/arching-logo-16.png';
import NowPlaying from './NowPlaying';
import RadioPlayer from './RadioPlayer';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      radio : "http://{$ICECAST_SERVER_NAME}/demo.ogg" // Our main stream source link goes here
    }
  }

  render() {
    return (
      <div id="menu">
        <div class="line menu-left">
        <img src={logo} className="menu-logo" alt="Arching Kaos Radio"/>
        <p class="title">Arching Kaos Radio</p>
        </div>
        <div class="line menu-right">
        <a href="#mixes">Mixes</a>&nbsp;|&nbsp;
        <a href="#chat">Chat</a>&nbsp;|&nbsp;
        <a href="http://{$API_SERVER_NAME}" target="_blank" rel="noopener noreferrer">Upload guide</a>
        </div> // ^ Link to the API goes here
        <div class="">
        <NowPlaying class="top-now"/>
        <RadioPlayer class="top-radio" className="top-radio" audioSource={this.state.radio}/>
        </div>
      </div>
    );
  }
}
 
export default Menu;
