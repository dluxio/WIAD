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
      field: '',
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elCreateButton = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_loginState', newVal);
  
  }
  
  
  onClick_state0_elLoginButton = (ev) => {
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
    
    const style_state0_elBackground639403 = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground639403_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elCreateButton = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00a3da',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elCard = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elCard_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_state0_elLoginButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elPasswordField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        pointerEvents: 'auto',
     };
    const style_state0_elTextCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_state0_elUserNameField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        pointerEvents: 'auto',
     };
    const style_state0_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_state0_elText2 = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state0_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state0_elTextCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground639403' style={style_state0_elBackground639403_outer}>
            <div style={style_state0_elBackground639403} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state0_elCreateButton' style={style_state0_elCreateButton}  onClick={this.onClick_state0_elCreateButton} >
              {this.props.locStrings.login_button2_278146}
            </Button>
            <div className='cardBg state0_elCard' style={style_state0_elCard_outer}>
              <div style={style_state0_elCard} />
            
            </div>
            
            <Button className='actionFont state0_elLoginButton' style={style_state0_elLoginButton}  color="accent" onClick={this.onClick_state0_elLoginButton} >
              {this.props.locStrings.login_button_814022}
            </Button>
            <input className='baseFont state0_elPasswordField' style={style_state0_elPasswordField} type="text" placeholder={this.props.locStrings.login_field_267410} onChange={this.textInputChanged_passwordField} value={this.state.passwordField}  />
            <div className='baseFont state0_elTextCopy' style={style_state0_elTextCopy}>
              <div>{this.props.locStrings.login_textcopy_878391}</div>
            </div>
            <input className='baseFont state0_elUserNameField' style={style_state0_elUserNameField} type="text" placeholder={this.props.locStrings.login_field_71175} onChange={this.textInputChanged_userNameField} value={this.state.userNameField}  />
            <div className='baseFont state0_elText' style={style_state0_elText}>
              <div>{this.props.locStrings.login_text_559853}</div>
            </div>
            <div className='state0_elText2' style={style_state0_elText2}>
              <div>{this.props.locStrings.login_text2_795274}</div>
            </div>
            <div className='baseFont state0_elText3' style={style_state0_elText3}>
              <div>{this.props.locStrings.login_text3_229860}</div>
            </div>
            <div className='baseFont state0_elTextCopy2' style={style_state0_elTextCopy2}>
              <div>{this.props.locStrings.login_textcopy2_851444}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  onClick_state1_elButton2 = (ev) => {
    window.open('https://widget.steem.ninja/widget.html?referrer=dlux-io', '_blank');
  
  }
  
  
  onClick_state1_elText4 = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_loginState', newVal);
  
  }
  
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
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
    
    const style_state1_elBackground639403 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackground639403_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state1_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elText4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        pointerEvents: 'auto',
     };
    const style_state1_elText2 = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state1_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state1_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_state1_elTextCopy3 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state1_elBackground639403' style={style_state1_elBackground639403_outer}>
            <div style={style_state1_elBackground639403} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state1_elButton2' style={style_state1_elButton2}  color="accent" onClick={this.onClick_state1_elButton2} >
              {this.props.locStrings.login_button2_182743}
            </Button>
            <div className='baseFont state1_elText4' style={style_state1_elText4} onClick={this.onClick_state1_elText4} >
              <div>{this.props.locStrings.login_text4_85650}</div>
            </div>
            <input className='baseFont state1_elField' style={style_state1_elField} type="text" placeholder={this.props.locStrings.login_field_686719} onChange={this.textInputChanged_field} value={this.state.field}  />
            <div className='state1_elText2' style={style_state1_elText2}>
              <div>{this.props.locStrings.login_text2_624214}</div>
            </div>
            <div className='baseFont state1_elText3' style={style_state1_elText3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text3_417618.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <Button className='actionFont state1_elButton' style={style_state1_elButton}  color="accent" >
              {this.props.locStrings.login_button_451164}
            </Button>
            <div className='state1_elTextCopy3' style={style_state1_elTextCopy3}>
              <div>{this.props.locStrings.login_textcopy3_463005}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_loginState !== undefined) ? this.props.ds_loginState : 0, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
