import React, { Component } from 'react';
import './App.css';
import InventoryItemState from './InventoryItemState';


export default class InventoryItem extends Component {

  // Properties used by this component:
  // state, name, thumb

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    let transformStateValue_elInventoryItemState = (input) => {
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
      
      return parseInt(input);
    
    }
    
    return (
      <div className="InventoryItem" style={baseStyle}>
        <div className="foreground">
          <div className='hasNestedComps elInventoryItemState'>
            <InventoryItemState {...this.props} visualStateIndex={transformStateValue_elInventoryItemState(this.props.state)} ref={(el)=> this._elInventoryItemState = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
      </div>
    )
  }
  

}
