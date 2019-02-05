import React, { Component } from 'react';
import Button from './Button';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
  increment = () => {
    this.props.todoStore.count += 1;
  }

  render() {
    const { count } = this.props.todoStore;

    return (
    <div className="counter">
      <Button
        action={this.increment}
        classes=""
        text="increment"/>
      {count}
    </div>
    );
  }
}

export default Counter;
