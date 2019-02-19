import React, { Component } from 'react';
import './App.css';
import img_state0_elCollaborationicon from './images/Collaboration_state0_elCollaborationicon.png';
import img_state1_elCollaborationicon from './images/Collaboration_state1_elCollaborationicon.png';


export default class Collaboration extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elCollaborationicon = {
        backgroundImage: 'url('+img_state0_elCollaborationicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Collaboration" style={baseStyle}>
        <div className="foreground">
          <div className='state0_elCollaborationicon' style={style_state0_elCollaborationicon} />
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
    
    const style_state1_elCollaborationicon = {
        backgroundImage: 'url('+img_state1_elCollaborationicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Collaboration" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elCollaborationicon' style={style_state1_elCollaborationicon} />
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
