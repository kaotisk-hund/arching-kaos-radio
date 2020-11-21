import React, { Component } from "react";
import "./Menu.css";
import logo from './assets/img/arching-logo-16.png';
import NowPlaying from './NowPlaying';
import RadioPlayer from './RadioPlayer';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // old hack
      // radio: document.URL.replace(/\/$/, "").replace("https", "http")+":8000/demo.ogg" /* Θέτουμε την πηγή του σταθμού μας εδώ */
      radio : "https://icecast.arching-kaos.com/demo.ogg"
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
        <a href="https://api.arching-kaos.com" target="_blank">Upload guide</a>
        </div>
        <div class="">
        <NowPlaying class="top-now"/>
        <RadioPlayer class="top-radio" className="top-radio" audioSource={this.state.radio}/>
        </div>
      </div>
    );
  }
}
 
export default Menu;
