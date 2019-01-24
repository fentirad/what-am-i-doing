import React, { Component } from 'react';
import '../styles/button.scss';

class Button extends Component {
  render() {
    const {
      action,
      classes,
      text
    } = this.props;

    const buttonClasses = `app-button ${classes}`;
    
    return (
    <button
      className={buttonClasses}
      onClick={action}>
      {text}
    </button>
    );
  }
}

export default Button;
