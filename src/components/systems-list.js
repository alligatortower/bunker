import React from 'react';
import ElectricalSystem from './Electrical.js';
import WaterSystem from './Water.js';

const SystemsList = (props) => {
  return (
    <div className='systems-list'>
      <WaterSystem
        water={props.systems.WATER}
        toggleOnline={props.toggleOnline}
      />
      <ElectricalSystem
        changeResourceAmount={props.changeResourceAmount}
        transferCharge={props.transferCharge}
        toggleOnline={props.toggleOnline}
        electrical={props.systems.ELECTRIC}
      />
    </div>
  )
}

export default SystemsList
