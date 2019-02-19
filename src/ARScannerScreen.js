import React, { Component } from 'react';
import './App.css';
import Iconbar from './Iconbar';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ARScannerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, inventory, empathy, curiosity, thinking, humility, collaboration, ethics

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
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
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
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Iconbar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='embeddedContent elEmbed' style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
            <div className='hasNestedComps elIconbar'>
              <Iconbar humility={this.props.humility} thinking={this.props.thinking} curiosity={this.props.curiosity} ethics={this.props.ethics} collaboration={this.props.collaboration} empathy={this.props.empathy} visualStateIndex={this.props.inventory} ref={(el)=> this._elIconbar = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
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
          </div>
        </div>
      </div>
    )
  }
  

}
