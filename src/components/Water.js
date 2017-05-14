import React, { Component } from 'react';

import waterIcon from '../../media/water.png';
import chargeIcon from '../../media/watts.png';
import OnOffButton from './buttons/OnOffButton.js';

class WaterSystem extends Component {
  render() {
    var water = this.props.water;
    return (
      <div className='system water-system'>
        <h2>Water System</h2>
        <OnOffButton
          online={water.online}
          onClick={()=>{this.props.toggleOnline('WATER')}}
          onRatio={this.props.onRatio}
        />
        <div>
          <img className='resource-icon' src={waterIcon} alt='charge icon' />
          <span> : {water.water}</span>
        </div>
        <button disabled={!water.online}>
          <span>Filter <span className='gain'>1</span> </span>
          <img className='resource-icon stored' src={waterIcon} alt='charge icon' />
          <span> for <span className='cost'>{water.filterRatio}</span> </span>
          <img className='resource-icon' src={waterIcon} alt='charge icon' />
          <span> and <span className='cost'>{water.filterChargeCost}</span> </span>
          <img className='resource-icon stored' src={chargeIcon} alt='charge icon' />
        </button>
      </div>
    )
  }
}

export default WaterSystem
