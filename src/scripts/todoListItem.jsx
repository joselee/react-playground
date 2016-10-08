import React from 'react';

export class TodoListItem extends React.Component {
    render() {
        return (
            <li className="todo-list-item">
                <input type="checkbox" checked={this.props.todo.done} ref="completed" onChange={this.toggleComplete.bind(this)} />
                <label className={this.props.todo.done ? 'done' : 'not-done'} onClick={this.toggleComplete.bind(this)}>
                    {this.props.todo.title}
                </label>
            </li>
        );
    }
    toggleComplete() {
        this.props.toggleComplete(this.props.todo.id);
    }
}