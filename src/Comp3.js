import React, { Component } from 'react';
import './App.css';
import img_state0_elHumilityicon from './images/Comp3_state0_elHumilityicon.png';
import img_state0_elThinkingicon from './images/Comp3_state0_elThinkingicon.png';
import img_state0_elCuriosityicon from './images/Comp3_state0_elCuriosityicon.png';
import img_state0_elCollaborationicon from './images/Comp3_state0_elCollaborationicon.png';
import img_state0_elEthicsicon from './images/Comp3_state0_elEthicsicon.png';
import img_state0_elEmpathyicon from './images/Comp3_state0_elEmpathyicon.png';
import img_state1_elHumilityicon from './images/Comp3_state1_elHumilityicon.png';
import img_state1_elThinkingicon from './images/Comp3_state1_elThinkingicon.png';
import img_state1_elCuriosityicon from './images/Comp3_state1_elCuriosityicon.png';
import img_state1_elCollaborationicon from './images/Comp3_state1_elCollaborationicon.png';
import img_state1_elEthicsicon from './images/Comp3_state1_elEthicsicon.png';
import img_state1_elEmpathyicon from './images/Comp3_state1_elEmpathyicon.png';


export default class Comp3 extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elHumilityicon = {
        backgroundImage: 'url('+img_state0_elHumilityicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elThinkingicon = {
        backgroundImage: 'url('+img_state0_elThinkingicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elCuriosityicon = {
        backgroundImage: 'url('+img_state0_elCuriosityicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elCollaborationicon = {
        backgroundImage: 'url('+img_state0_elCollaborationicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elEthicsicon = {
        backgroundImage: 'url('+img_state0_elEthicsicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elEmpathyicon = {
        backgroundImage: 'url('+img_state0_elEmpathyicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="foreground">
          <div className='state0_elHumilityicon' style={style_state0_elHumilityicon} />
          <div className='state0_elThinkingicon' style={style_state0_elThinkingicon} />
          <div className='state0_elCuriosityicon' style={style_state0_elCuriosityicon} />
          <div className='state0_elCollaborationicon' style={style_state0_elCollaborationicon} />
          <div className='state0_elEthicsicon' style={style_state0_elEthicsicon} />
          <div className='state0_elEmpathyicon' style={style_state0_elEmpathyicon} />
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
    
    const style_state1_elHumilityicon = {
        backgroundImage: 'url('+img_state1_elHumilityicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state1_elThinkingicon = {
        backgroundImage: 'url('+img_state1_elThinkingicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state1_elCuriosityicon = {
        backgroundImage: 'url('+img_state1_elCuriosityicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state1_elCollaborationicon = {
        backgroundImage: 'url('+img_state1_elCollaborationicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state1_elEthicsicon = {
        backgroundImage: 'url('+img_state1_elEthicsicon+')',
        backgroundSize: '100% 100%',
     };
    const style_state1_elEmpathyicon = {
        backgroundImage: 'url('+img_state1_elEmpathyicon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elHumilityicon' style={style_state1_elHumilityicon} />
          <div className='state1_elThinkingicon' style={style_state1_elThinkingicon} />
          <div className='state1_elCuriosityicon' style={style_state1_elCuriosityicon} />
          <div className='state1_elCollaborationicon' style={style_state1_elCollaborationicon} />
          <div className='state1_elEthicsicon' style={style_state1_elEthicsicon} />
          <div className='state1_elEmpathyicon' style={style_state1_elEmpathyicon} />
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
