import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/CreateAccountScreen_elRoundimage_349701.png';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';


export default class CreateAccountScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      picker: '',
    };
  }

  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'AR Scanner'
    this.props.appActions.goToScreen('arscanner');
  
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
    const style_elRoundimage = {
        backgroundImage: 'url('+img_elRoundimage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    let selection_picker = this.state.picker;
    
    const style_elPicker_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen CreateAccountScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elRoundimage'>
            <div style={style_elRoundimage} />
          
          </div>
          
          <div className='baseFont elPicker' style={style_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.createaccount_button_1033867}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
