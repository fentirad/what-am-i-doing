import * as React from 'react';
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './styles/app.scss';
import { observer } from 'mobx-react';
import TodoStore from './stores/TodoStore';

export interface AppProps {
  todoStore: TodoStore
}

@observer
export class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    const {
      todoStore
    } = this.props;

    return (
      <div className="app">
        <Header />
        <AddTodoForm
          todoStore={todoStore} />
        <TodoList
          todoStore={todoStore} />
        <Footer
          todoStore={todoStore} />
      </div>
    );
  }
};
