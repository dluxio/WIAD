import React, { Component } from 'react';
import './App.css';


export default class LoginFailScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elText = (ev) => {
    // Go to screen 'Login'
    this.props.appActions.goToScreen('login');
  
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
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elText = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#fc33af',
        textAlign: 'left',
     };
    const style_elText_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginFailScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText' style={style_elText_outer}>
            <div style={style_elText} onClick={this.onClick_elText} >
              <div>{this.props.locStrings.loginfail_text_649192}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
