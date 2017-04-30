import React from 'react';
import onOffPng from '../../media/on-off.png';

const OnOffButton = (props) => {
  var onOff = props.online ? 'on' : 'off';
  var onOffClass = 'on-off ' + onOff
  return (
    <button className={onOffClass} onClick={props.onClick}>
      <img src={onOffPng} alt='on off icon'/>
    </button>
  )
}

export default OnOffButton
