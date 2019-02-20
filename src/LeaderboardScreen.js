import React, { Component } from 'react';
import './App.css';
import UserItem from './UserItem';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LeaderboardScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elArbutton = (ev) => {
    // Go to screen 'AR Scanner'
    this.props.appActions.goToScreen('arscanner');
  
  }
  
  
  onClick_elInventorybutton = (ev) => {
    // Go to screen 'Inventory'
    this.props.appActions.goToScreen('inventory');
  
  }
  
  
  onClick_elLeaderbutton = (ev) => {
    // Go to screen 'Leaderboard'
    this.props.appActions.goToScreen('leaderboard');
  
  }
  
  
  render() {
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
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('users').items);
    
    const style_elArbutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elInventorybutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elLeaderbutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LeaderboardScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <UserItem dataSheetId={'users'} dataSheetRow={row} empathy={row.empathy} username={row.username} collaboration={row.collaboration} ethics={row.ethics} curiosity={row.curiosity} thinking={row.thinking} humility={row.humility} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elArbutton' style={style_elArbutton}  color="accent" onClick={this.onClick_elArbutton} >
              {this.props.locStrings.leaderboard_arbutton_699726}
            </Button>
            <Button className='actionFont elInventorybutton' style={style_elInventorybutton}  color="accent" onClick={this.onClick_elInventorybutton} >
              {this.props.locStrings.leaderboard_inventorybutton_232127}
            </Button>
            <Button className='actionFont elLeaderbutton' style={style_elLeaderbutton}  color="accent" onClick={this.onClick_elLeaderbutton} >
              {this.props.locStrings.leaderboard_leaderbutton_782556}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
