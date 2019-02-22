import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      passwordField: '',
      userNameField: '',
    };
  }

  onClick_elCreateButton = (ev) => {
    window.open('https://widget.steem.ninja/widget.html?referrer=dlux-io', '_blank');
  
  }
  
  
  onClick_elLoginButton = (ev) => {
    // 'Unlock gate' action.
    this.sendLogin();
  
  }
  
  
  textInputChanged_passwordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  textInputChanged_userNameField = (event) => {
    this.setState({userNameField: event.target.value});
  }
  
  sendLogin = () => {
    // This implements the 'simple password' unlock from React Studio.
    // For prototyping only -- you don't want to use this in production code because the password is readable here!
    // To implement a real login, use a web service plugin instead of the 'simple password' setting.
    const pass = this.state.passwordField || '';
    if (pass === "1234") {
       this.finishLogin();
    } else {
      const err = 'Incorrect password.';
      this.props.appActions.goToScreen('login', { errorText: ''+err });
  
    }
  }
  
  finishLogin = () => {
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
    const style_elCreateButton = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00a3da',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elCard = {
        width: '100%',
        height: '100%',
     };
    const style_elCard_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elLoginButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elPasswordField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        pointerEvents: 'auto',
     };
    const style_elTextCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elUserNameField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        pointerEvents: 'auto',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText2 = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elTextCopy2 = {
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
            <Button className='actionFont elCreateButton' style={style_elCreateButton}  onClick={this.onClick_elCreateButton} >
              {this.props.locStrings.login_button2_278146}
            </Button>
            <div className='cardBg elCard' style={style_elCard_outer}>
              <div style={style_elCard} />
            
            </div>
            
            <Button className='actionFont elLoginButton' style={style_elLoginButton}  color="accent" onClick={this.onClick_elLoginButton} >
              {this.props.locStrings.login_button_814022}
            </Button>
            <input className='baseFont elPasswordField' style={style_elPasswordField} type="text" placeholder={this.props.locStrings.login_field_267410} onChange={this.textInputChanged_passwordField} value={this.state.passwordField}  />
            <div className='baseFont elTextCopy' style={style_elTextCopy}>
              <div>{this.props.locStrings.login_textcopy_878391}</div>
            </div>
            <input className='baseFont elUserNameField' style={style_elUserNameField} type="text" placeholder={this.props.locStrings.login_field_71175} onChange={this.textInputChanged_userNameField} value={this.state.userNameField}  />
            <div className='baseFont elText' style={style_elText}>
              <div>{this.props.locStrings.login_text_559853}</div>
            </div>
            <div className='elText2' style={style_elText2}>
              <div>{this.props.locStrings.login_text2_795274}</div>
            </div>
            <div className='baseFont elText3' style={style_elText3}>
              <div>{this.props.locStrings.login_text3_229860}</div>
            </div>
            <div className='baseFont elTextCopy2' style={style_elTextCopy2}>
              <div>{this.props.locStrings.login_textcopy2_851444}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
