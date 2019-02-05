import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Button from './Button';
import Checkbox from './Checkbox';
import '../styles/footer.scss';

@observer
class Footer extends Component {
  handleCompletedOnChange = () => {
    const {
      allTodosComplete
    } = this.props.todoStore;
    
    if (allTodosComplete) {
      this.props.todoStore.uncompleteAllTodos();
    } else {
      this.props.todoStore.completeAllTodos();
    }
  };

  renderStatus() {
    const {
      todoCount,
      completedTodoCount
    } = this.props.todoStore;

    if (todoCount === 0) {
      return (
      <div className="app-footer-status">
        WRITE SOMETHING TO DO!
      </div>
      )
    }

    if (todoCount === completedTodoCount) {
      return (
      <div className="app-footer-status">
        ALL DONE!
      </div>
      )
    }

    return (
      <div className="app-footer-status">
      {completedTodoCount} / {todoCount} todos complete
      </div>
    );
  }

  render() {
    const {
      allTodosComplete
    } = this.props.todoStore;
    return (
    <div className="app-footer">
      <div className="app-footer-complete">
        <Checkbox
          onChangeHandler={this.handleCompletedOnChange}
          name="completed-all"
          checked={allTodosComplete}
          label="" />
      </div>
      {this.renderStatus()}
      <Button
        classes="app-footer-delete"
        action={this.props.todoStore.deleteAllTodos}
        text="x" />
    </div>
    );
  }
}

export default Footer;


