import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { App, AppProps } from './App';
import TodoStore from './stores/TodoStore'
import * as serviceWorker from './serviceWorker';

const props: AppProps = {
  todoStore: new TodoStore()
};


ReactDOM.render(React.createElement(App, props), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
