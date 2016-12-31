import React, { Component } from 'react';

class ElectricalSystem extends Component {
  render() {
    var electrical = this.props.electrical;
    return (
      <div className='electrical-system'>
        <h2>Electrical System</h2>
        <div>Voltage: {electrical.voltage}</div>
        <div>Amperage: {electrical.amperage}</div>
        <div>Wattage: {electrical.wattage}</div>
        <div>Online: {electrical.online ? 'on' : 'off'}</div>
        <button onClick={()=>{this.props.toggleOnline('ELECTRIC')}}>Toggle Online</button>
        <button onClick={()=>{this.props.changeResourceAmount('energy', 1)}}>Hand Crank</button>
        <button onClick={()=>{this.props.increaseVoltage(1)}}>Increase Voltage</button>
      </div>
    )
  }
}

export default ElectricalSystem;
