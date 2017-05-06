import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    var text = this.props.on ? this.props.onText : this.props.offText;

    var className = 'toggle-button ';
    className += this.props.on ? 'online' : 'offline';
    return (
      <button className={className} onClick={this.props.onClick}>{text} {this.props.icon}</button>
    )
  }
}

export default ToggleButton
