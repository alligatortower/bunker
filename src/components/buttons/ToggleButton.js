import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    var content = this.props.on ? this.props.onContent : this.props.offContent;

    var className = 'toggle-button ';
    className += this.props.on ? 'online' : 'offline';
    return (
      <button className={className} onClick={()=>{this.props.onClick()}} disabled={this.props.disabled}>{content}</button>
    )
  }
}

export default ToggleButton
