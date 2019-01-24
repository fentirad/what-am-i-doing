import React, { Component } from 'react';
import '../styles/checkbox.scss';

class Checkbox extends Component {
  render() {
    const {
      onChangeHandler,
      classes,
      name,
      checked,
      label
    } = this.props;

    const checkboxClasses = `app-checkbox ${classes}`;
    
    return (
    <label className="app-checkbox-container">
      {label}
      <input
        className={checkboxClasses}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChangeHandler} />
      <span className="app-checkbox-checkmark"></span>
    </label>
    );
  }
}

export default Checkbox;
