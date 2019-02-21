import React, { Component } from 'react';
import './App.css';
import InventoryItem from './InventoryItem';
import UserItem from './UserItem';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ARAppScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Functions for component state index 0 (1 of 3) --- 
  
  onClick_state0_elArbutton747870 = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state0_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state0_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
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
    
    const style_state0_elEmbed573400 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe id=\"iframeXRCanvas\" scrolling=\"yes\" align=\"right\" allow=\"gyroscope; accelerometer; microphone; camera;\" allowfullscreen=\"true\" src=\"https://blushing-poet.glitch.me“></iframe>";
    
    
    const style_state0_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elInventorybutton205650 = {
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
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='embeddedContent containerMinHeight state0_elEmbed573400' style={style_state0_elEmbed573400}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state0_elArbutton747870' style={style_state0_elArbutton747870}  color="accent" onClick={this.onClick_state0_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state0_elInventorybutton205650' style={style_state0_elInventorybutton205650}  color="accent" onClick={this.onClick_state0_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <Button className='actionFont state0_elLeaderbutton675644' style={style_state0_elLeaderbutton675644}  color="accent" onClick={this.onClick_state0_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
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
  
  
  onClick_state1_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state1_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
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
    
    const dataSheet_inventory = this.props.dataSheets['inventory'];
    const style_state1_elEmbed573400 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe id=\"iframeXRCanvas\" scrolling=\"yes\" align=\"right\" allow=\"gyroscope; accelerometer; microphone; camera;\" allowfullscreen=\"true\" src=\"https://blushing-poet.glitch.me“></iframe>";
    
    
    const style_state1_elBackground569119 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackground569119_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state1_elList2 = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list 2'.
    let items_list2 = [];
    let listComps_list2 = {};
    items_list2 = items_list2.concat(this.props.appActions.getDataSheet('inventory').items);
    
    const style_state1_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elInventorybutton205650 = {
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
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='embeddedContent containerMinHeight state1_elEmbed573400' style={style_state1_elEmbed573400}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
          <div className='appBg containerMinHeight state1_elBackground569119' style={style_state1_elBackground569119_outer}>
            <div style={style_state1_elBackground569119} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps state1_elList2'>
            <div style={style_state1_elList2}>
              {items_list2.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list2[row._componentId] : <InventoryItem dataSheetId={'inventory'} dataSheetRow={row} state={row.state} name={row.name} thumb={row.thumb} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._state1_elList2_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state1_elArbutton747870' style={style_state1_elArbutton747870}  color="accent" onClick={this.onClick_state1_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state1_elInventorybutton205650' style={style_state1_elInventorybutton205650}  color="accent" onClick={this.onClick_state1_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <Button className='actionFont state1_elLeaderbutton675644' style={style_state1_elLeaderbutton675644}  color="accent" onClick={this.onClick_state1_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
            <div className='font-arialBoldMT  state1_elText3474049' style={style_state1_elText3474049}>
              <div>{this.props.locStrings.arapp_text3_474049}</div>
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
  
  
  onClick_state2_elInventorybutton205650 = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_appState', newVal);
  
  }
  
  
  onClick_state2_elLeaderbutton675644 = (ev) => {
    let newVal = "2";
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
    const dataSheet_inventory = this.props.dataSheets['inventory'];
    const style_state2_elEmbed573400 = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe id=\"iframeXRCanvas\" scrolling=\"yes\" align=\"right\" allow=\"gyroscope; accelerometer; microphone; camera;\" allowfullscreen=\"true\" src=\"https://blushing-poet.glitch.me“></iframe>";
    
    
    const style_state2_elBackground569119 = {
        width: '100%',
        height: '100%',
     };
    const style_state2_elBackground569119_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state2_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('users').items);
    
    const style_state2_elArbutton747870 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state2_elInventorybutton205650 = {
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
    
    return (
      <div className="AppScreen ARAppScreen" style={baseStyle}>
        <div className="background">
          <div className='embeddedContent containerMinHeight state2_elEmbed573400' style={style_state2_elEmbed573400}>
            <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
          </div>
          <div className='appBg containerMinHeight state2_elBackground569119' style={style_state2_elBackground569119_outer}>
            <div style={style_state2_elBackground569119} />
          
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
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state2_elArbutton747870' style={style_state2_elArbutton747870}  color="accent" onClick={this.onClick_state2_elArbutton747870} >
              {this.props.locStrings.arscanner_button_747870}
            </Button>
            <Button className='actionFont state2_elInventorybutton205650' style={style_state2_elInventorybutton205650}  color="accent" onClick={this.onClick_state2_elInventorybutton205650} >
              {this.props.locStrings.arscanner_buttoncopy_205650}
            </Button>
            <Button className='actionFont state2_elLeaderbutton675644' style={style_state2_elLeaderbutton675644}  color="accent" onClick={this.onClick_state2_elLeaderbutton675644} >
              {this.props.locStrings.arscanner_inventorybuttoncopy_675644}
            </Button>
            <div className='font-arialBoldMT  state2_elText3474049' style={style_state2_elText3474049}>
              <div>{this.props.locStrings.arapp_text3_474049}</div>
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
