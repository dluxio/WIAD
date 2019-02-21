import React, { Component } from 'react';
import './App.css';
import img_state1_elImage from './images/InventoryItemState_state1_elImage_835231.jpg';


export default class InventoryItemState extends Component {

  // Properties used by this component:
  // name, thumb, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elText = {
        color: '#bbdfff',
        textAlign: 'center',
     };
    const style_state0_elRectangle = {
        background: 'rgba(187, 223, 255, 1.000)',
        borderRadius: '18.1px',
     };
    
    return (
      <div className="InventoryItemState" style={baseStyle}>
        <div className="foreground">
          <div className='baseFont state0_elText' style={style_state0_elText}>
            <div>{this.props.locStrings.inventoryitem_text_962334}</div>
          </div>
          <div className='state0_elRectangle' style={style_state0_elRectangle} />
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
    
    const style_state1_elImage = {
        backgroundImage: 'url('+(this.props.thumb || img_state1_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        borderRadius: '18.1px',
     };
    const style_state1_elText = {
        color: '#578eff',
        textAlign: 'center',
     };
    const value_text = this.props.name;
    
    
    return (
      <div className="InventoryItemState" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elImage' style={style_state1_elImage} />
          <div className='baseFont state1_elText' style={style_state1_elText}>
            <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.inventoryitem_text_354864}</span>)}</div>
          </div>
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
