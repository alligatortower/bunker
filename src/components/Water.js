import React, { Component } from 'react';

import OnOffButton from './OnOffButton.js';

class WaterSystem extends Component {
  render() {
    var water = this.props.water;
    return (
      <div className='system water-system'>
        <h2>Water System</h2>
        <OnOffButton
          online={water.online}
          onClick={()=>{this.props.toggleOnline('WATER')}}
        />
        <div>Pressure: {water.pressure}</div>
      </div>
    )
  }
}

export default WaterSystem
