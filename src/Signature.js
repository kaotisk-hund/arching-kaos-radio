import React, { Component } from 'react';
import './Signature.css';

class Signature extends Component {
  render(){
    return (
       <div id="foot">
         <p id="signature">
           An&nbsp;
           <a id="sign-link" rel="noopener noreferrer" href="https://arching-kaos.tk" target="_blank">Arching Kaos</a>&nbsp;
           project by&nbsp;
           <a id="sign-link" rel="noopener noreferrer" href="https://www.kaotisk-hund.tk/" target="_blank">kaotisk hund</a>&nbsp;2019-2020
         </p>
       </div>
    );
  }
}


export default Signature;