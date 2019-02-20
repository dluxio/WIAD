import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elGetsteem = (ev) => {
    // Go to screen 'Onboarding'
    this.props.appActions.goToScreen('onboarding');
  
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
    const style_elGetsteem = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elLogin = {
        color: '#0093d5',
        textAlign: 'center',
     };
    const style_elWelcome = {
        fontSize: 30.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elText = {
        fontSize: 17.2,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elGetsteem' style={style_elGetsteem}  color="accent" onClick={this.onClick_elGetsteem} >
              {this.props.locStrings.login_button_733831}
            </Button>
            <div className='baseFont elLogin' style={style_elLogin}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text_468923.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elWelcome' style={style_elWelcome}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text2_841526.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elText' style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text_168394.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
