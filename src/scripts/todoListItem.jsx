import React from 'react';

export class TodoListItem extends React.Component {
    render() {
        return (
            <li className="todo-list-item">
                <input type="checkbox"
                       checked={this.props.todo.done}
                       ref="completed"
                       onChange={this.props.toggleComplete.bind(this, this.props.todo.id)} />
                <label className={this.props.todo.done ? 'done' : 'not-done'}
                       onClick={this.props.toggleComplete.bind(this, this.props.todo.id)}>
                    {this.props.todo.title}
                </label>
            </li>
        );
    }
}