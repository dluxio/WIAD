import React, { Component } from 'react';
import './App.css';
import steem from 'steem';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      usernameinput: null,
      passwordinput: null
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elGetsteembtn = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_loginState', newVal);
  
  }
  
  
  textInputChanged_usernameinput = (event) => {
    this.setState({usernameinput: event.target.value});
  }
  
  textInputChanged_passwordinput = (event) => {
    this.setState({passwordinput: event.target.value});
  }
  
  onClick_state0_elLoginbtn = (ev) => {
    // 'Unlock gate' action.
    this.sendLogin();
  
  }
  
  
  sendLogin = () => {
    
    var thiso = this

    const un = this.state.usernameinput.toLowerCase().trim() || ''
    if (un === 'clear'){localStorage.removeItem('up')}
    if (un === 'reset'){localStorage.clear()}
    function go() {
        thiso.props.appActions.goToScreen('onboarding');
    }
    if(1){go()}
    else {
    const pass = this.state.passwordinput.trim() || '';
    var isValidUsername = steem.utils.validateAccountName(un);
    if (isValidUsername) {
        this.props.appActions.goToScreen('login', {
            errorText: 'Username invalid'
        });
        alert('This is not a valid username')
    } else {
        try {
            steem.api.getAccounts([un], function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                  try{
                    var pubWifP = result[0].posting.key_auths[0][0];
                    var pubWifA = result[0].active.key_auths[0][0];
                    var pubWifO = result[0].owner.key_auths[0][0];
                  } catch(e) {alert('This is not a steem account')}
                    var pk
                    localStorage.setItem('un', un)
                    if (pass !== '') {
                        try {
                            var verified = steem.auth.wifIsValid(pass, pubWifP);
                        } catch (e) {
                            verified = false
                        }
                        console.log('p', verified)
                        if (verified) {
                            localStorage.setItem('up', pass);
                            go();
                        } else {
                            try {
                                verified = steem.auth.wifIsValid(pass, pubWifA);
                            } catch (e) {
                                verified = false
                            }
                            console.log('a', verified)
                            if (verified) {
                                localStorage.setItem('up', pass);
                                go();
                            } else {
                                try {
                                    verified = steem.auth.wifIsValid(pass, pubWifO);
                                } catch (e) {
                                    verified = false
                                }
                                console.log('o', verified)
                                if (verified) {
                                    localStorage.setItem('up', pass);
                                    go();
                                } else {
                                    try {
                                        pk = steem.auth.getPrivateKeys(un, pass, ['posting']);
                                        console.log(pk)
                                        verified = steem.auth.wifIsValid(pk.posting, pubWifP);
                                        console.log('m', verified)
                                        if (verified) {
                                            localStorage.setItem('up', pk.posting);
                                            go();
                                        } else {
                                            this.props.appActions.goToScreen('login', {
                                                errorText: 'Password/Key Incorrect'
                                            });
                                            alert('Password/Key Incorrect')
                                        }
                                    } catch (e) {
                                        console.log(e, 'insanity')
                                    }
                                }
                            }
                        }
                    } else {
                        alert('No Password or Key found')
                    }
                }
            });
        } catch (e) {
            alert('username/key incorrect')
        }
    }
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
        backgroundColor: 'white',
     };
    const style_state0_elHeader = {
        fontSize: 23.7,
        color: '#fc33af',
        textAlign: 'left',
     };
    const style_state0_elLine482093 = {
        borderTop: '1px solid black',
     };
    const style_state0_elBody = {
        fontSize: 15.1,
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state0_elTag = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state0_elGetsteembtn = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00a3da',
     };
    const style_state0_elGetsteembtn_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elUsernamelabel = {
        fontSize: 15.1,
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state0_elUsernameinput = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.usernameinput == null) {
        this.state.usernameinput = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_username'] : '');
    }
    const value_usernameinput = this.state.usernameinput;
    
    const style_state0_elUsernameinput_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elPasswordlabel = {
        fontSize: 15.1,
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state0_elPasswordinput = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.passwordinput == null) {
        this.state.passwordinput = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_password'] : '');
    }
    const value_passwordinput = this.state.passwordinput;
    
    const style_state0_elPasswordinput_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elLoginbtn = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elLoginbtn_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight state0_elBackground639403' style={style_state0_elBackground639403_outer}>
            <div style={style_state0_elBackground639403} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-helveticaNeueBold  state0_elHeader'>
            <div style={style_state0_elHeader}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_text2_795274.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='state0_elLine482093'>
            <div style={style_state0_elLine482093} />
          
          </div>
          
          <div className='font-helveticaNeueItalic  state0_elBody'>
            <div style={style_state0_elBody}>
              <div>{this.props.locStrings.login_text3_229860}</div>
            </div>
          
          </div>
          
          <div className='font-helveticaNeueBold  state0_elTag'>
            <div style={style_state0_elTag}>
              <div>{this.props.locStrings.login_textcopy2_851444}</div>
            </div>
          
          </div>
          
          <div className='actionFont state0_elGetsteembtn' style={style_state0_elGetsteembtn_outer}>
            <Button style={style_state0_elGetsteembtn}  onClick={this.onClick_state0_elGetsteembtn} >
              {this.props.locStrings.login_button2_278146}
            </Button>
          
          </div>
          
          <div className='font-helveticaNeue  state0_elUsernamelabel'>
            <div style={style_state0_elUsernamelabel}>
              <div>{this.props.locStrings.login_text_559853}</div>
            </div>
          
          </div>
          
          <div className='baseFont state0_elUsernameinput' style={style_state0_elUsernameinput_outer}>
            <input style={style_state0_elUsernameinput} type="text" placeholder={this.props.locStrings.login_field_71175} onChange={this.textInputChanged_usernameinput} value={value_usernameinput !== undefined ? value_usernameinput : ''}  />
          
          </div>
          
          <div className='font-helveticaNeue  state0_elPasswordlabel'>
            <div style={style_state0_elPasswordlabel}>
              <div>{this.props.locStrings.login_textcopy_878391}</div>
            </div>
          
          </div>
          
          <div className='baseFont state0_elPasswordinput' style={style_state0_elPasswordinput_outer}>
            <input style={style_state0_elPasswordinput} type="text" placeholder={this.props.locStrings.login_field_267410} onChange={this.textInputChanged_passwordinput} value={value_passwordinput !== undefined ? value_passwordinput : ''}  />
          
          </div>
          
          <div className='actionFont state0_elLoginbtn' style={style_state0_elLoginbtn_outer}>
            <Button style={style_state0_elLoginbtn}  color="accent" onClick={this.onClick_state0_elLoginbtn} >
              {this.props.locStrings.login_button_814022}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  
  onClick_state1_elSteemninjabtn = (ev) => {
    window.open('https://widget.steem.ninja/widget.html?referrer=dlux-io', '_blank');
  
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_loginState', newVal);
  
  }
  
  
  onClick_state1_elBackbtn = (ev) => {
    let newVal = "0";
    this.props.appActions.updateDataSlot('ds_loginState', newVal);
  
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
        backgroundColor: 'white',
     };
    const style_state1_elHeader = {
        fontSize: 23.7,
        color: '#fc33af',
        textAlign: 'left',
     };
    const style_state1_elLine482093 = {
        borderTop: '1px solid black',
     };
    const style_state1_elBody = {
        fontSize: 15.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_state1_elSteemninjabtn = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00a3da',
     };
    const style_state1_elSteemninjabtn_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elBackbtn = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state1_elBackbtn_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight state1_elBackground639403' style={style_state1_elBackground639403_outer}>
            <div style={style_state1_elBackground639403} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-helveticaNeueBold  state1_elHeader'>
            <div style={style_state1_elHeader}>
              <div>{this.props.locStrings.login_text2_624214}</div>
            </div>
          
          </div>
          
          <div className='state1_elLine482093'>
            <div style={style_state1_elLine482093} />
          
          </div>
          
          <div className='font-helveticaNeue  state1_elBody'>
            <div style={style_state1_elBody}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_body_833488.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='actionFont state1_elSteemninjabtn' style={style_state1_elSteemninjabtn_outer}>
            <Button style={style_state1_elSteemninjabtn}  onClick={this.onClick_state1_elSteemninjabtn} >
              {this.props.locStrings.login_button2_182743}
            </Button>
          
          </div>
          
          <div className='baseFont state1_elBackbtn' style={style_state1_elBackbtn_outer}>
            <div style={style_state1_elBackbtn} onClick={this.onClick_state1_elBackbtn} >
              <div>{this.props.locStrings.login_text4_85650}</div>
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
