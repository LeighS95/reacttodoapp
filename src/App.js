import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/main.css'
import Header from './components/layout/header'
import AddToDo from './components/addtodo'
import Todos from './components/todo'
import About from './components/pages/about'
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3').then(res => this.setState({ todos: res.data }));
  }

  //toggle todo item complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  //add todo item
  addToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, 
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data ]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddToDo addToDo={this.addToDo}/>
              <Todos todo={this.state.todos} markComplete={this.markComplete} delItem={this.delItem}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
