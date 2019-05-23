import React, { Component } from 'react';
import TodoItem from './todoitems';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todo.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delItem={this.props.delItem}/>
        ));
    }
}

Todos.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

export default Todos;