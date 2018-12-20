import React, { Component } from 'react';
//import Home from './components/Home';
//import Test from './components/Test';
//import ReactForm from './components/ReactForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
