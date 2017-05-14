import React from 'react';
import ElectricalSystem from './Electrical.js';
import WaterSystem from './Water.js';

const getRoundedRatio = (ratio) => {
  return Math.max(Math.min(1, ratio), 0)*100;
}

const SystemsList = (props) => {
  const storedCharge = props.resources.storedCharge.amount;
  const electricCharge = Math.max(storedCharge, props.systems.ELECTRIC.charge);
  var electricRatio = electricCharge ? electricCharge/props.systems.ELECTRIC.onResourceAmount: 0;
  var waterRatio = storedCharge ? storedCharge/props.systems.WATER.onResourceAmount : 0;
  waterRatio = getRoundedRatio(waterRatio);
  electricRatio = getRoundedRatio(electricRatio);
  return (
    <div className='systems-list'>
      <WaterSystem
        onRatio={waterRatio}
        water={props.systems.WATER}
        toggleOnline={props.toggleOnline}
      />
      <ElectricalSystem
        onRatio={electricRatio}
        addCharge={props.addCharge}
        toggleStoring={props.toggleStoring}
        toggleOnline={props.toggleElectricalOnline}
        electrical={props.systems.ELECTRIC}
      />
    </div>
  )
}

export default SystemsList
