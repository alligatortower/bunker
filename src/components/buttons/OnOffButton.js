import React from 'react';

import onOffPng from '../../../media/on-off.png';

const OnOffButton = (props) => {
  var onOff = props.online ? 'on' : 'off';
  var onOffClass = 'on-off ' + onOff;
  var style = {height: props.onRatio + '%'};
  console.log(props.onRatio)
  var needChargeDiv;
  if (!props.online) {
    needChargeDiv = (
      <div className='charge-needed-guage'>
        <div style={style} className='charge-has'></div>
      </div>
    )
  }
  return (
    <div className={onOffClass}>
      <button onClick={props.onClick}>
        <img src={onOffPng} alt='on off icon'/>
      </button>
      {needChargeDiv}
    </div>
  )
}

export default OnOffButton
