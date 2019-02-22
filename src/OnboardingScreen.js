import React, { Component } from 'react';
import './App.css';
import img_state0_elOnboard1 from './images/OnboardingScreen_state0_elOnboard1_617664.png';
import img_state1_elOnboard2 from './images/OnboardingScreen_state1_elOnboard2_407434.png';
import img_state2_elOnboard3 from './images/OnboardingScreen_state2_elOnboard3_511290.png';

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
  
  
  onClick_state0_elSkip = (ev) => {
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
        backgroundColor: 'white',
     };
    const style_state0_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elSkip = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elText = {
        fontSize: 30.1,
        color: '#fc33af',
        textAlign: 'left',
     };
    const style_state0_elTextCopy = {
        fontSize: 15.1,
        color: '#00a3da',
        textAlign: 'left',
     };
    const style_state0_elLine = {
        borderTop: '1px solid black',
     };
    const style_state0_elOnboard1 = {
        backgroundImage: 'url('+img_state0_elOnboard1+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight state0_elBackground682495' style={style_state0_elBackground682495_outer}>
            <div style={style_state0_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state0_elNext' style={style_state0_elNext} onClick={this.onClick_state0_elNext} >
              <div>{this.props.locStrings.onboarding_text_787265}</div>
            </div>
            <div className='baseFont state0_elSkip' style={style_state0_elSkip} onClick={this.onClick_state0_elSkip} >
              <div>{this.props.locStrings.onboarding_nextcopy_9690}</div>
            </div>
            <div className='font-helveticaNeueBold  state0_elText' style={style_state0_elText}>
              <div>{this.props.locStrings.onboarding_text_1040641}</div>
            </div>
            <div className='font-helveticaNeueItalic  state0_elTextCopy' style={style_state0_elTextCopy}>
              <div>{this.props.locStrings.onboarding_textcopy_244310}</div>
            </div>
            <div className='state0_elLine' style={style_state0_elLine} />
            <div className='state0_elOnboard1' style={style_state0_elOnboard1} />
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
  
  
  onClick_state1_elSkip = (ev) => {
    let newVal = "0";
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
        backgroundColor: 'white',
     };
    const style_state1_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elSkip = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state1_elTextCopy2 = {
        fontSize: 25.8,
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_state1_elText2 = {
        fontSize: 25.8,
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_state1_elOnboard2 = {
        backgroundImage: 'url('+img_state1_elOnboard2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight state1_elBackground682495' style={style_state1_elBackground682495_outer}>
            <div style={style_state1_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state1_elNext' style={style_state1_elNext} onClick={this.onClick_state1_elNext} >
              <div>{this.props.locStrings.onboarding_next_458435}</div>
            </div>
            <div className='baseFont state1_elSkip' style={style_state1_elSkip} onClick={this.onClick_state1_elSkip} >
              <div>{this.props.locStrings.onboarding_skip_413376}</div>
            </div>
            <div className='font-helveticaNeueItalic  state1_elTextCopy2' style={style_state1_elTextCopy2}>
              <div>{this.props.locStrings.onboarding_textcopy2_726489}</div>
            </div>
            <div className='font-helveticaNeueItalic  state1_elText2' style={style_state1_elText2}>
              <div>{this.props.locStrings.onboarding_text2_246824}</div>
            </div>
            <div className='state1_elOnboard2' style={style_state1_elOnboard2} />
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
  
  
  onClick_state2_elSkip = (ev) => {
    let newVal = "1";
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
        backgroundColor: 'white',
     };
    const style_state2_elNext = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state2_elSkip = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state2_elTextCopy2 = {
        fontSize: 25.8,
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_state2_elText2 = {
        fontSize: 25.8,
        color: '#00a3da',
        textAlign: 'center',
     };
    const style_state2_elOnboard3 = {
        backgroundImage: 'url('+img_state2_elOnboard3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen OnboardingScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight state2_elBackground682495' style={style_state2_elBackground682495_outer}>
            <div style={style_state2_elBackground682495} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont state2_elNext' style={style_state2_elNext} onClick={this.onClick_state2_elNext} >
              <div>{this.props.locStrings.onboarding_next_636295}</div>
            </div>
            <div className='baseFont state2_elSkip' style={style_state2_elSkip} onClick={this.onClick_state2_elSkip} >
              <div>{this.props.locStrings.onboarding_skip_585382}</div>
            </div>
            <div className='font-helveticaNeueItalic  state2_elTextCopy2' style={style_state2_elTextCopy2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.onboarding_textcopy2_300855.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='font-helveticaNeueItalic  state2_elText2' style={style_state2_elText2}>
              <div>{this.props.locStrings.onboarding_text2_45669}</div>
            </div>
            <div className='state2_elOnboard3' style={style_state2_elOnboard3} />
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 3 (4 of 4) --- 
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
    
    let newVal = event.target.value;
    
    let transformValue = (input) => {
      // This function modifies the value written to the target data slot.
      // There is a variable named 'input' that provides the input value.
      
      // edit shit
      return input;
    }
    newVal = transformValue(newVal);
    
    this.props.appActions.updateDataSlot("ds_selectedVirtue", newVal);
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
        backgroundColor: 'white',
     };
    const style_state3_elTextCopy3 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'left',
     };
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('qualities');
    const columnName_picker = 'column1';
    
    const style_state3_elPicker_outer = {
        pointerEvents: 'auto',
     };
    const style_state3_elText4 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00a3da',
        textAlign: 'left',
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
    const style_state3_elText = {
        fontSize: 30.1,
        color: '#fc33af',
        textAlign: 'left',
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
          <div className='cardBg containerMinHeight state3_elBackground682495' style={style_state3_elBackground682495_outer}>
            <div style={style_state3_elBackground682495} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state3_elTextCopy3'>
            <div style={style_state3_elTextCopy3}>
              <div>{this.props.locStrings.onboarding_textcopy3_855997}</div>
            </div>
          
          </div>
          
          <div className='baseFont state3_elPicker' style={style_state3_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[columnName_picker];
                return <Option key={item.key} value={colValue} label={colValue} />
              })}
            </Select>
          
          </div>
          
          <div className='state3_elText4'>
            <div style={style_state3_elText4}>
              <div>{this.props.locStrings.onboarding_text4_14386}</div>
            </div>
          
          </div>
          
          <div className='baseFont state3_elTextarea' style={style_state3_elTextarea_outer}>
            <textarea style={style_state3_elTextarea}  placeholder={this.props.locStrings.onboarding_textarea_743646} onChange={this.textAreaChanged_textarea} value={this.state.textarea}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-helveticaNeueBold  state3_elText' style={style_state3_elText}>
              <div>{this.props.locStrings.onboarding_text_349469}</div>
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
