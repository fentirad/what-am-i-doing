import React, { Component } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import '../styles/footer.scss';

class Footer extends Component {
  handleCompletedOnChange = () => {
    const {
      allTodosCompleted
    } = this.props;
    
    if (allTodosCompleted) {
      this.props.uncompleteAll();
    } else {
      this.props.completeAll();
    }
  };

  renderStatus() {
    const {
      todos
    } = this.props;
    const todoKeys = Object.keys(todos);
    const totalTodos = todoKeys.length;

    const totalComplete = todoKeys.reduce((prevTotal, key) => {
      const todo = todos[key];
      return (todo.complete ? prevTotal + 1: prevTotal);
    }, 0);
    if (totalTodos === 0) {
      return (
      <div className="app-footer-status">
        WRITE SOMETHING TO DO!
      </div>
      )
    }

    return (
      <div className="app-footer-status">
      {totalComplete} / {totalTodos} todos complete
      </div>
    );
  }

  render() {
    const {
      allTodosCompleted,
      deleteAll
    } = this.props;
    return (
    <div className="app-footer">
      <div className="app-footer-complete">
        <Checkbox
          onChangeHandler={this.handleCompletedOnChange}
          name="completed-all"
          checked={allTodosCompleted}
          label="" />
      </div>
      {this.renderStatus()}
      <Button
        classes="app-footer-delete"
        action={deleteAll}
        text="x" />
    </div>
    );
  }
}

export default Footer;


