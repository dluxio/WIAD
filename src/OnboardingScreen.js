import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class OnboardingScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Functions for component state index 0 (1 of 4) --- 
  
  onClick_state0_elNext = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
  }
  
  
  onClick_state0_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
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
    
    const style_state0_elBackground682495 = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground682495_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state0_elNext_inner = {
        textAlign: 'center',
     };
    const style_state0_elSkip9690 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state0_elSkip9690_inner = {
        textAlign: 'center',
     };
    const style_state0_elText = {
        fontSize: 30.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_state0_elTextCopy = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground682495' style={style_state0_elBackground682495_outer}>
            <div style={style_state0_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state0_elNext' style={style_state0_elNext} onClick={this.onClick_state0_elNext} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_text_787265}</div>
            </div>
            <div className='baseFont state0_elSkip9690' style={style_state0_elSkip9690} onClick={this.onClick_state0_elSkip9690} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_nextcopy_9690}</div>
            </div>
            <div className='font-georgiaBold  state0_elText' style={style_state0_elText}>
              <div>{this.props.locStrings.onboarding_text_1040641}</div>
            </div>
            <div className='font-georgiaItalic  state0_elTextCopy' style={style_state0_elTextCopy}>
              <div>{this.props.locStrings.onboarding_textcopy_244310}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 4) --- 
  
  onClick_state1_elNext = (ev) => {
    let newVal = "2";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
  }
  
  
  onClick_state1_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
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
    
    const style_state1_elBackground682495 = {
        width: '100%',
        height: '100%',
     };
    const style_state1_elBackground682495_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state1_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state1_elNext_inner = {
        textAlign: 'center',
     };
    const style_state1_elSkip9690 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state1_elSkip9690_inner = {
        textAlign: 'center',
     };
    const style_state1_elTextCopy2 = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state1_elTextCopy2_inner = {
        textAlign: 'center',
     };
    const style_state1_elText2 = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state1_elText3623545 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state1_elBackground682495' style={style_state1_elBackground682495_outer}>
            <div style={style_state1_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state1_elNext' style={style_state1_elNext} onClick={this.onClick_state1_elNext} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_next_458435}</div>
            </div>
            <div className='baseFont state1_elSkip9690' style={style_state1_elSkip9690} onClick={this.onClick_state1_elSkip9690} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_nextcopy_9690}</div>
            </div>
            <div className='font-georgiaItalic  state1_elTextCopy2' style={style_state1_elTextCopy2}>
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_textcopy2_649023}</div>
            </div>
            <div className='font-georgiaItalic  state1_elText2' style={style_state1_elText2}>
              <div>{this.props.locStrings.onboarding_text2_554126}</div>
            </div>
            <div className='font-arialBoldMT  state1_elText3623545' style={style_state1_elText3623545}>
              <div>{this.props.locStrings.onboarding_text3_623545}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 4) --- 
  
  onClick_state2_elNext = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
  }
  
  
  onClick_state2_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboarding', newVal);
  
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
    
    const style_state2_elBackground682495 = {
        width: '100%',
        height: '100%',
     };
    const style_state2_elBackground682495_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state2_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state2_elNext_inner = {
        textAlign: 'center',
     };
    const style_state2_elSkip9690 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state2_elSkip9690_inner = {
        textAlign: 'center',
     };
    const style_state2_elTextCopy2 = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    // eslint-disable-next-line no-unused-vars
    const style_state2_elTextCopy2_inner = {
        textAlign: 'center',
     };
    const style_state2_elText2 = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state2_elText3623545 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state2_elBackground682495' style={style_state2_elBackground682495_outer}>
            <div style={style_state2_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state2_elNext' style={style_state2_elNext} onClick={this.onClick_state2_elNext} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_next_636295}</div>
            </div>
            <div className='baseFont state2_elSkip9690' style={style_state2_elSkip9690} onClick={this.onClick_state2_elSkip9690} >
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_nextcopy_9690}</div>
            </div>
            <div className='font-georgiaItalic  state2_elTextCopy2' style={style_state2_elTextCopy2}>
              <div className="bottomAlignedContent">{this.props.locStrings.onboarding_textcopy2_726489}</div>
            </div>
            <div className='font-georgiaItalic  state2_elText2' style={style_state2_elText2}>
              <div>{this.props.locStrings.onboarding_text2_246824}</div>
            </div>
            <div className='font-arialBoldMT  state2_elText3623545' style={style_state2_elText3623545}>
              <div>{this.props.locStrings.onboarding_text3_623545}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 3 (4 of 4) --- 
  
  onClick_state3_elStartbutton = (ev) => {
    // Go to screen 'AR App'
    this.props.appActions.goToScreen('arapp');
  
  }
  
  
  renderState3() {
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
    
    const style_state3_elBackground682495 = {
        width: '100%',
        height: '100%',
     };
    const style_state3_elBackground682495_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state3_elText3623545 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state3_elStartbutton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state3_elBackground682495' style={style_state3_elBackground682495_outer}>
            <div style={style_state3_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-arialBoldMT  state3_elText3623545' style={style_state3_elText3623545}>
              <div>{this.props.locStrings.onboarding_text3_623545}</div>
            </div>
            <Button className='actionFont state3_elStartbutton' style={style_state3_elStartbutton}  color="accent" onClick={this.onClick_state3_elStartbutton} >
              {this.props.locStrings.onboarding_button_301283}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_onboarding !== undefined) ? this.props.ds_onboarding : 0, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
      case 3:
        return this.renderState3();
    }
  }
  

}
