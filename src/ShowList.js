import React, { Component } from 'react';
import './ShowList.css';
import Player from './Player'
import Lists from './lists.json';

class ShowList extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      mixes : Lists,
      visible : false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.sayhi = this.sayhi.bind(this);

  }
  sayhi(){
    console.log("hi!");
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e){
    this.sayhi();

    console.log("clicked");
    e.stopPropagation();
  }
  render() {
  	return (
      <div class="ShowListContainer">
      <h3 onClick={this.handleMouseDown}>Mix list</h3>
      <div class="ShowList" visible>
        	{this.state.mixes.map(function(obj, idx){
        		return (<table><td key={idx}>{obj.artist} - {obj.title}</td>
        		<td width="10%"><Player audioSource={obj.dat}/></td></table>)
        	})}
        </div>
      </div>
    )

  }
}

export default ShowList;
