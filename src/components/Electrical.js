import React, { Component } from 'react';

import OnOffButton from './buttons/OnOffButton.js';
import ToggleButton from './buttons/ToggleButton.js';

import chargeIcon from '../../media/watts.png';

class ElectricalSystem extends Component {
  render() {
    var electrical = this.props.electrical;
    var chargeClass = electrical.charge > electrical.maxCharge ? 'danger' : ''
    var storeText = (
      <span>Store 1: <img className='resource-icon stored' src={chargeIcon} alt='charge icon' /> for 2: <img className='resource-icon' src={chargeIcon} alt='charge icon' /> per tick</span>
    )
    return (
      <div className='system electrical-system'>
        <h2>Electrical System</h2>
        <OnOffButton
          online={electrical.online}
          onClick={()=>{this.props.toggleOnline()}}
          onRatio={this.props.onRatio}
        />
        <div>
          <img className='resource-icon' src={chargeIcon} alt='charge icon' />
          <span className={chargeClass}> : {electrical.charge} / {electrical.maxCharge}</span>
        </div>
        <button onClick={()=>{this.props.addCharge(1)}}>Hand Crank</button>
        <ToggleButton
          disabled={!electrical.online}
          onClick={this.props.toggleStoring}
          on={electrical.storing}
          onContent={storeText}
          offContent={storeText}
        />
      </div>
    )
  }
}

export default ElectricalSystem;
