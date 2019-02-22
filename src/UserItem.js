import React, { Component } from 'react';
import './App.css';
import Humility from './Humility';
import Thinking from './Thinking';
import Curiosity from './Curiosity';
import Collaboration from './Collaboration';
import Ethics from './Ethics';
import Empathy from './Empathy';


export default class UserItem extends Component {

  // Properties used by this component:
  // empathy, username, collaboration, ethics, curiosity, thinking, humility

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    let transformStateValue_elHumility = (input) => {
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
      
      return parseInt(input, 10);
    }
    let transformStateValue_elThinking = (input) => {
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
      
      return parseInt(input, 10);
    }
    let transformStateValue_elCuriosity = (input) => {
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
      
      return parseInt(input, 10);
    }
    let transformStateValue_elEthics = (input) => {
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
      
      return parseInt(input, 10);
    }
    let transformStateValue_elCollaboration = (input) => {
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
      
      return parseInt(input, 10);
    }
    let transformStateValue_elEmpathy = (input) => {
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
      
      return parseInt(input, 10);
    }
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.username;
    
    
    return (
      <div className="UserItem" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='hasNestedComps elHumility'>
            <Humility visualStateIndex={transformStateValue_elHumility(this.props.humility)} ref={(el)=> this._elHumility = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elThinking'>
            <Thinking visualStateIndex={transformStateValue_elThinking(this.props.thinking)} ref={(el)=> this._elThinking = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elCuriosity'>
            <Curiosity visualStateIndex={transformStateValue_elCuriosity(this.props.curiosity)} ref={(el)=> this._elCuriosity = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elEthics'>
            <Collaboration visualStateIndex={transformStateValue_elEthics(this.props.ethics)} ref={(el)=> this._elEthics = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elCollaboration'>
            <Ethics visualStateIndex={transformStateValue_elCollaboration(this.props.collaboration)} ref={(el)=> this._elCollaboration = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elEmpathy'>
            <Empathy visualStateIndex={transformStateValue_elEmpathy(this.props.empathy)} ref={(el)=> this._elEmpathy = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='baseFont elText' style={style_elText}>
            <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.useritem_text_292967}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
