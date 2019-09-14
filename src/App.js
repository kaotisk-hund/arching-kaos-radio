import React, { Component } from 'react';
import Header from './Header';
import RadioPlayer from './RadioPlayer';
import Signature from './Signature';
import ShowList from './ShowList';
import NowPlaying from './NowPlaying';
import MenuContainer from './MenuContainer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      radio: "http://radio.arching-kaos.tk:8000/demo.ogg"
    }
  }
  render() {
    return (
      <div className="App">
        <Header>
        <RadioPlayer audioSource={this.state.radio}/>
        <NowPlaying/>
        <ShowList onShowList={this.props.mix}/>
        <Signature/>
        </Header>
      </div>
    );
  }
}

export default App;
