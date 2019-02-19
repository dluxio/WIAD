import React, { Component } from 'react';
import './App.css';
import Empathy from './Empathy';
import Collaboration from './Collaboration';
import Ethics from './Ethics';
import Curiosity from './Curiosity';
import Thinking from './Thinking';
import Humility from './Humility';


export default class Iconbar extends Component {

  // Properties used by this component:
  // humility, thinking, curiosity, ethics, collaboration, empathy, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    let transformStateValue_state0_elEmpathy = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 2})} else {this.setState({visualStateIndexOverride: 1})}
    }
    let transformStateValue_state0_elCollaboration = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 2})} else {this.setState({visualStateIndexOverride: 1})}
    
    }
    let transformStateValue_state0_elEthics = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 2})} else {this.setState({visualStateIndexOverride: 1})}
    }
    let transformStateValue_state0_elCuriosity = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 2})} else {this.setState({visualStateIndexOverride: 1})}
    
    }
    let transformStateValue_state0_elThinking = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 2})} else {this.setState({visualStateIndexOverride: 1})}
    
    }
    let transformStateValue_state0_elHumility = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      if (input){this.setState({visualStateIndexOverride: 1})} else {this.setState({visualStateIndexOverride: 2})}
    }
    
    return (
      <div className="Iconbar" style={baseStyle}>
        <div className="foreground">
          <div className='hasNestedComps state0_elEmpathy'>
            <Empathy visualStateIndex={transformStateValue_state0_elEmpathy(this.props.empathy)} ref={(el)=> this._state0_elEmpathy = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps state0_elCollaboration'>
            <Collaboration visualStateIndex={transformStateValue_state0_elCollaboration(this.props.collaboration)} ref={(el)=> this._state0_elCollaboration = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps state0_elEthics'>
            <Ethics visualStateIndex={transformStateValue_state0_elEthics(this.props.ethics)} ref={(el)=> this._state0_elEthics = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps state0_elCuriosity'>
            <Curiosity {...this.props} visualStateIndex={transformStateValue_state0_elCuriosity(this.props.curiosity)} ref={(el)=> this._state0_elCuriosity = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps state0_elThinking'>
            <Thinking visualStateIndex={transformStateValue_state0_elThinking(this.props.thinking)} ref={(el)=> this._state0_elThinking = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps state0_elHumility'>
            <Humility visualStateIndex={transformStateValue_state0_elHumility(this.props.humility)} ref={(el)=> this._state0_elHumility = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
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
    
    
    return (
      <div className="Iconbar" style={baseStyle}>
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
