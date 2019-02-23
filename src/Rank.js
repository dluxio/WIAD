import React, { Component } from 'react';
import './App.css';


export default class Rank extends Component {

  // Properties used by this component:
  // rank, visualStateIndex

  // --- Functions for component state index 0 (1 of 6) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elText233707 = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state0_elText233707'>
            <div style={style_state0_elText233707}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_33707}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 6) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elText233707 = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state1_elText233707'>
            <div style={style_state1_elText233707}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_33707}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 6) --- 
  
  renderState2() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state2_elText233707 = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state2_elText233707'>
            <div style={style_state2_elText233707}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_33707}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 3 (4 of 6) --- 
  
  renderState3() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state3_elText233707 = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state3_elText233707'>
            <div style={style_state3_elText233707}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_33707}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 4 (5 of 6) --- 
  
  renderState4() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state4_elText233707 = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state4_elText233707'>
            <div style={style_state4_elText233707}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.comp1_text2_33707}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 5 (6 of 6) --- 
  
  renderState5() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state5_elText2 = {
        fontSize: 15.1,
        color: '#fc33af',
        textAlign: 'center',
     };
    
    return (
      <div className="Rank" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state5_elText2'>
            <div style={style_state5_elText2}>
              <div>{this.props.locStrings.rank_text2_41278}</div>
            </div>
          
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
      case 2:
        return this.renderState2();
      case 3:
        return this.renderState3();
      case 4:
        return this.renderState4();
      case 5:
        return this.renderState5();
    }
  }
  

}
