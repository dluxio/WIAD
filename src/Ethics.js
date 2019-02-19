import React, { Component } from 'react';
import './App.css';
import img_state0_elEthicsicon from './images/Ethics_state0_elEthicsicon.png';
import img_state1_elEthicsicon from './images/Ethics_state1_elEthicsicon.png';


export default class Ethics extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elEthicsicon = {
        backgroundImage: 'url('+img_state0_elEthicsicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Ethics" style={baseStyle}>
        <div className="foreground">
          <div className='state0_elEthicsicon' style={style_state0_elEthicsicon} />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elEthicsicon = {
        backgroundImage: 'url('+img_state1_elEthicsicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Ethics" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elEthicsicon' style={style_state1_elEthicsicon} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
