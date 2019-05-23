import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    itemStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.itemStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
                { title }
                <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    padding: '3px 8px',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem