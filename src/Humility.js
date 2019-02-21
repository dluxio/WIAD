import React, { Component } from 'react';
import './App.css';
import img_state0_elHumilityicon from './images/Humility_state0_elHumilityicon.png';
import img_state1_elHumilityicon from './images/Humility_state1_elHumilityicon.png';


export default class Humility extends Component {

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
    
    return (
      <div className="Humility" style={baseStyle}>
        <div className="foreground">
          <div className='containerMinHeight state0_elHumilityicon' style={style_state0_elHumilityicon} />
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
    
    return (
      <div className="Humility" style={baseStyle}>
        <div className="foreground">
          <div className='containerMinHeight state1_elHumilityicon' style={style_state1_elHumilityicon} />
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
