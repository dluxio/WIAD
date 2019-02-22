import React, { Component } from 'react';
import './App.css';
import InventoryStatus from './InventoryStatus';
import InventorySlots from './InventorySlots';
import UserItem from './UserItem';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ARAppScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, empathy, ethics, curiosity, thinking, humility, collaboration

  // --- Functions for component state index 0 (1 of 3) --- 
  
  onClick_state0_elArbutton747870 = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state0_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state0_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const dataSheet_users = this.props.dataSheets['users'];
    const style_state0_elBackground569119 = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground569119_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elEmbed261354 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe scrolling=\"no\" style=\"border:0; width:100vw;height:100vh;display:inline-block;left:0px;position:fixed;top:0px;\" align=\"right\" allow=\"gyroscope; accelerometer; camera;\" allowfullscreen src=\"/ar.html\"></iframe>";
    
    
    const style_state0_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elLeaderbutton675644 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elText3474049 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state0_elInventorybutton205650 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const data_state0_elInventoryStatus722499 = dataSheet_users.items[2];
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground569119' style={style_state0_elBackground569119_outer}>
            <div style={style_state0_elBackground569119} />
          
          </div>
          
          <div className='embeddedContent containerMinHeight state0_elEmbed261354' style={style_state0_elEmbed261354}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state0_elArbutton747870' style={style_state0_elArbutton747870}  color="accent" onClick={this.onClick_state0_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state0_elLeaderbutton675644' style={style_state0_elLeaderbutton675644}  color="accent" onClick={this.onClick_state0_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
            <div className='font-arialBoldMT  state0_elText3474049' style={style_state0_elText3474049}>
              <div>{this.props.locStrings.arapp_text3_474049}</div>
            </div>
            <Button className='actionFont state0_elInventorybutton205650' style={style_state0_elInventorybutton205650}  color="accent" onClick={this.onClick_state0_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <div className='hasNestedComps state0_elInventoryStatus722499'>
              <InventoryStatus {...data_state0_elInventoryStatus722499} ref={(el)=> this._state0_elInventoryStatus722499 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  onClick_state1_elArbutton747870 = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state1_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state1_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const dataSheet_users = this.props.dataSheets['users'];
    const style_state1_elBackground569119 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackground569119_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state1_elEmbed261354 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe scrolling=\"no\" style=\"border:0; width:100vw;height:100vh;display:inline-block;left:0px;position:fixed;top:0px;\" align=\"right\" allow=\"gyroscope; accelerometer; camera;\" allowfullscreen src=\"/ar.html\"></iframe>";
    
    
    const style_state1_elBackgroundCopy415200 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackgroundCopy415200_outer = {
        backgroundColor: '#f6f6f6',
     };
    const data_state1_elInventorySlots = dataSheet_users.items[0];
    const style_state1_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elLeaderbutton675644 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elText3474049 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state1_elInventorybutton205650 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const data_state1_elInventoryStatus722499 = dataSheet_users.items[2];
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state1_elBackground569119' style={style_state1_elBackground569119_outer}>
            <div style={style_state1_elBackground569119} />
          
          </div>
          
          <div className='embeddedContent containerMinHeight state1_elEmbed261354' style={style_state1_elEmbed261354}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
          <div className='appBg containerMinHeight state1_elBackgroundCopy415200' style={style_state1_elBackgroundCopy415200_outer}>
            <div style={style_state1_elBackgroundCopy415200} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps state1_elInventorySlots'>
            <div>
              <InventorySlots {...data_state1_elInventorySlots} ref={(el)=> this._state1_elInventorySlots = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state1_elArbutton747870' style={style_state1_elArbutton747870}  color="accent" onClick={this.onClick_state1_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state1_elLeaderbutton675644' style={style_state1_elLeaderbutton675644}  color="accent" onClick={this.onClick_state1_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
            <div className='font-arialBoldMT  state1_elText3474049' style={style_state1_elText3474049}>
              <div>{this.props.locStrings.arapp_text3_474049}</div>
            </div>
            <Button className='actionFont state1_elInventorybutton205650' style={style_state1_elInventorybutton205650}  color="accent" onClick={this.onClick_state1_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <div className='hasNestedComps state1_elInventoryStatus722499'>
              <InventoryStatus {...data_state1_elInventoryStatus722499} ref={(el)=> this._state1_elInventoryStatus722499 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  onClick_state2_elArbutton747870 = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state2_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state2_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  renderState2() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const dataSheet_users = this.props.dataSheets['users'];
    const style_state2_elBackground569119 = {
        width: '100%',
        height: '100%',
     };
    const style_state2_elBackground569119_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state2_elEmbed261354 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe scrolling=\"no\" style=\"border:0; width:100vw;height:100vh;display:inline-block;left:0px;position:fixed;top:0px;\" align=\"right\" allow=\"gyroscope; accelerometer; camera;\" allowfullscreen src=\"/ar.html\"></iframe>";
    
    
    const style_state2_elBackgroundCopy415200 = {
        width: '100%',
        height: '100%',
     };
    const style_state2_elBackgroundCopy415200_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state2_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('users').items);
    
    const style_state2_elListCopy = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list copy'.
    let items_listCopy = [];
    let listComps_listCopy = {};
    items_listCopy = items_listCopy.concat(this.props.appActions.getDataSheet('users').items);
    
    const style_state2_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state2_elLeaderbutton675644 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state2_elText3474049 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state2_elInventorybutton205650 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const data_state2_elInventoryStatus722499 = dataSheet_users.items[2];
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state2_elBackground569119' style={style_state2_elBackground569119_outer}>
            <div style={style_state2_elBackground569119} />
          
          </div>
          
          <div className='embeddedContent containerMinHeight state2_elEmbed261354' style={style_state2_elEmbed261354}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
          <div className='appBg containerMinHeight state2_elBackgroundCopy415200' style={style_state2_elBackgroundCopy415200_outer}>
            <div style={style_state2_elBackgroundCopy415200} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps state2_elList'>
            <ul style={style_state2_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <UserItem dataSheetId={'users'} dataSheetRow={row} empathy={row.empathy} username={row.username} collaboration={row.collaboration} ethics={row.ethics} curiosity={row.curiosity} thinking={row.thinking} humility={row.humility} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._state2_elList_endMarker = el} />
            </ul>
          
          </div>
          
          <div className='hasNestedComps state2_elListCopy'>
            <ul style={style_state2_elListCopy}>
              {items_listCopy.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_listCopy[row._componentId] : <UserItem dataSheetId={'users'} dataSheetRow={row} empathy={row.empathy} username={row.username} collaboration={row.collaboration} ethics={row.ethics} curiosity={row.curiosity} thinking={row.thinking} humility={row.humility} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._state2_elListCopy_endMarker = el} />
            </ul>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state2_elArbutton747870' style={style_state2_elArbutton747870}  color="accent" onClick={this.onClick_state2_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state2_elLeaderbutton675644' style={style_state2_elLeaderbutton675644}  color="accent" onClick={this.onClick_state2_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
            <div className='font-arialBoldMT  state2_elText3474049' style={style_state2_elText3474049}>
              <div>{this.props.locStrings.arapp_text3_474049}</div>
            </div>
            <Button className='actionFont state2_elInventorybutton205650' style={style_state2_elInventorybutton205650}  color="accent" onClick={this.onClick_state2_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <div className='hasNestedComps state2_elInventoryStatus722499'>
              <InventoryStatus {...data_state2_elInventoryStatus722499} ref={(el)=> this._state2_elInventoryStatus722499 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_appState !== undefined) ? this.props.ds_appState : 0, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
    }
  }
  

}
