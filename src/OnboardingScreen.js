import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';


export default class OnboardingScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      picker: '',
      textarea: '',
    };
  }

  // --- Functions for component state index 0 (1 of 4) --- 
  
  onClick_state0_elNext = (ev) => {
    let newVal = "1";
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
  }
  
  
  onClick_state0_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
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
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
  }
  
  
  onClick_state1_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
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
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
  }
  
  
  onClick_state2_elSkip9690 = (ev) => {
    let newVal = "3";
    this.props.appActions.updateDataSlot('ds_onboardingState', newVal);
  
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
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  textAreaChanged_textarea = (event) => {
    this.setState({textarea: event.target.value});
  }
  
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
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('qualities');
    const columnName_picker = 'column1';
    
    const style_state3_elPicker_outer = {
        pointerEvents: 'auto',
     };
    const style_state3_elTextarea = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_state3_elTextarea_outer = {
        pointerEvents: 'auto',
     };
    const style_state3_elText4 = {
        fontSize: 10.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state3_elTextCopy3 = {
        fontSize: 10.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state3_elText3623545 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_state3_elStartbutton = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#00a3da',
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
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont state3_elPicker' style={style_state3_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[columnName_picker];
                return <Option key={item.key} value={colValue} label={colValue} />
              })}
            </Select>
          
          </div>
          
          <div className='baseFont state3_elTextarea' style={style_state3_elTextarea_outer}>
            <textarea style={style_state3_elTextarea}  placeholder={this.props.locStrings.onboarding_textarea_743646} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
          
          </div>
          
          <div className='state3_elText4'>
            <div style={style_state3_elText4}>
              <div>{this.props.locStrings.onboarding_text4_14386}</div>
            </div>
          
          </div>
          
          <div className='state3_elTextCopy3'>
            <div style={style_state3_elTextCopy3}>
              <div>{this.props.locStrings.onboarding_textcopy3_855997}</div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-arialBoldMT  state3_elText3623545' style={style_state3_elText3623545}>
              <div>{this.props.locStrings.onboarding_text3_623545}</div>
            </div>
            <Button className='actionFont state3_elStartbutton' style={style_state3_elStartbutton}  onClick={this.onClick_state3_elStartbutton} >
              {this.props.locStrings.onboarding_button_301283}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_onboardingState !== undefined) ? this.props.ds_onboardingState : 0, 10)) {
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
