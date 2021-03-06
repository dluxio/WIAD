import React, { Component } from 'react';
import './App.css';
import Humility from './Humility';
import Thinking from './Thinking';
import Curiosity from './Curiosity';
import Collaboration from './Collaboration';
import Ethics from './Ethics';
import Empathy from './Empathy';


export default class InventoryStatus extends Component {

  // Properties used by this component:
  // ethics, curiosity, thinking, humility, empathy, found, rank, collaboration

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
        backgroundColor: 'white',
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
    const style_elText3 = {
        fontSize: 12.9,
        color: '#fc33af',
        textAlign: 'center',
     };
    const style_elText2 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'center',
     };
    const value_text2 = this.props.rank;
    
    const style_elText = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_elTextCopy = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_elTextCopy2 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#00a3da',
        textAlign: 'center',
     };
    const value_textCopy2 = this.props.found;
    
    const style_elTextCopy3 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'center',
     };
    
    return (
      <div className="InventoryStatus" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight elBackground' style={style_elBackground_outer}>
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
          <div className='hasNestedComps elCollaboration'>
            <Collaboration visualStateIndex={transformStateValue_elCollaboration(this.props.collaboration)} ref={(el)=> this._elCollaboration = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elEthics'>
            <Ethics visualStateIndex={transformStateValue_elEthics(this.props.ethics)} ref={(el)=> this._elEthics = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elEmpathy'>
            <Empathy visualStateIndex={transformStateValue_elEmpathy(this.props.empathy)} ref={(el)=> this._elEmpathy = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='font-arialBoldMT  elText3' style={style_elText3}>
            <div>{this.props.locStrings.inventorystatus_text3_467979}</div>
          </div>
          <div className='elText2' style={style_elText2}>
            <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.inventorystatus_text2_39687}</span>)}</div>
          </div>
          <div className='elText' style={style_elText}>
            <div>{this.props.locStrings.inventorystatus_text_779623}</div>
          </div>
          <div className='elTextCopy' style={style_elTextCopy}>
            <div>{this.props.locStrings.inventorystatus_textcopy_723620}</div>
          </div>
          <div className='elTextCopy2' style={style_elTextCopy2}>
            <div>{value_textCopy2 !== undefined ? value_textCopy2 : (<span className="propValueMissing">{this.props.locStrings.inventorystatus_textcopy2_830887}</span>)}</div>
          </div>
          <div className='elTextCopy3' style={style_elTextCopy3}>
            <div>{this.props.locStrings.inventorystatus_textcopy3_348248}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
