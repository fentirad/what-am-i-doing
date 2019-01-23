import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/add-todo.scss';

class AddTodoForm extends Component {
  static propTypes = {
    createTodo: PropTypes.func
  }

  handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      console.log(e);
      return;
    }

    //this.props.createTodo();
  }

  render() {
    return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        onKeyUp={this.handleKeyUp}
      />
    </div>
    );
  }
}

export default AddTodoForm;
