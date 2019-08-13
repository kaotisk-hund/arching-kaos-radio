import React, { Component } from 'react';
import './ShowList.css';
import Player from './Player'
import Lists from './lists.json';

class ShowList extends Component {
  constructor(props, context) {
  	super(props, context);
 
  	this.state = {
  		mixes : Lists
  	}
  }
  render() {
  	return (    
      <div>
      <h3>Mix list</h3>
        <div class="ShowList">
          
        	{this.state.mixes.map(function(obj, idx){
        		return (<table><td key={idx}>{obj.artist} - {obj.title}</td>
        		<td width="10%"><Player audioSource={obj.ipfs}/></td></table>)
        	})}
          
        </div>
      </div>
    )

  }
}

export default ShowList;
