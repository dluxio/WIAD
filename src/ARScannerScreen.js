import React, { Component } from 'react';
import './App.css';
import Comp3 from './Comp3';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ARScannerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, inventory

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
    const style_elEmbed = {
        pointerEvents: 'auto',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe id=\"iframeXRCanvas\" scrolling=\"no\" width=\"100%\" height=\"100%\" align=\"right\" allow=\"gyroscope; accelerometer; microphone; camera; xr;\" allowfullscreen=\"true\" src=\"https://QmRsAPvgES5GstfR83aApLPYmXDFEohm8YrTYNGFvcHHTk.ipfs.dlux.io/ipfs/QmRsAPvgES5GstfR83aApLPYmXDFEohm8YrTYNGFvcHHTk?undefined\"></iframe>";
    
    
    const style_elCollectedButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'Arial-BoldMT', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elArButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'Arial-BoldMT', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elLeaderButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'Arial-BoldMT', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen ARScannerScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='embeddedContent elEmbed' style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
            <Button className='elCollectedButton' style={style_elCollectedButton}  color="accent" >
              {this.props.locStrings.start_button_1016931}
            </Button>
            <Button className='elArButton' style={style_elArButton}  color="accent" >
              {this.props.locStrings.start_button_754385}
            </Button>
            <Button className='elLeaderButton' style={style_elLeaderButton}  color="accent" >
              {this.props.locStrings.start_button_756557}
            </Button>
            <div className='hasNestedComps elComp'>
              <Comp3 visualStateIndex={this.props.inventory} ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
