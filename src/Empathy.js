import React, { Component } from 'react';
import './App.css';
import img_state0_elEmpathyicon from './images/Empathy_state0_elEmpathyicon.png';
import img_state1_elEmpathyicon from './images/Empathy_state1_elEmpathyicon.png';


export default class Empathy extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elEmpathyicon = {
        backgroundImage: 'url('+img_state0_elEmpathyicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Empathy" style={baseStyle}>
        <div className="foreground">
          <div className='containerMinHeight state0_elEmpathyicon' style={style_state0_elEmpathyicon} />
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
    
    const style_state1_elEmpathyicon = {
        backgroundImage: 'url('+img_state1_elEmpathyicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Empathy" style={baseStyle}>
        <div className="foreground">
          <div className='containerMinHeight state1_elEmpathyicon' style={style_state1_elEmpathyicon} />
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
