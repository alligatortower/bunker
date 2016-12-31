import React, { Component } from 'react';

class WaterSystem extends Component {
  render() {
    var water = this.props.water;
    return (
      <div className='water-system'>
        <h2>Water System</h2>
        <div>Pressure: {water.pressure}</div>
        <div>Online: {water.online ? 'on' : 'off'}</div>
        <button onClick={()=>{this.props.toggleOnline('WATER')}}>Toggle Online</button>
      </div>
    )
  }
}

export default WaterSystem
