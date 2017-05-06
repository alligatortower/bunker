import React, { Component } from 'react';

import OnOffButton from './buttons/OnOffButton.js';
import ToggleButton from './buttons/ToggleButton.js';

import chargeIcon from '../../media/watts.png';

class ElectricalSystem extends Component {
  render() {
    var electrical = this.props.electrical;
    return (
      <div className='system electrical-system'>
        <h2>Electrical System</h2>
        <OnOffButton
          online={electrical.online}
          onClick={()=>{this.props.toggleOnline('ELECTRIC')}}
        />
        <div>
          <img className='resource-icon' src={chargeIcon} alt='charge icon' />
          <span> : {electrical.charge}</span>
        </div>
        <button onClick={()=>{this.props.changeResourceAmount('storedCharge', 1)}}>Hand Crank</button>
        <ToggleButton
          onClick={()=>{this.props.transferCharge('stored', 1)}}
          on={electrical.storing}
          onText={'Storing'}
          offText={'Not Storing'}
          icon={<img className='resource-icon' src={chargeIcon} alt='charge icon' />}
        />
      </div>
    )
  }
}

export default ElectricalSystem;
