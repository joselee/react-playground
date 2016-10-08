import React from 'react';

export class TodoAddForm extends React.Component {
    render() {
        return (
            <form className="new-todo-form" onSubmit={this.submitNewTodo.bind(this)}>
                <input placeholder="What do you need to do?" ref="newTodoTitle" />
            </form>
        );
    }

    submitNewTodo(e) {
        e.preventDefault();
        if(!this.refs.newTodoTitle.value) {
            return;
        }

        let newTodo = {
            id: new Date().getTime(), //Unix timestamp
            title: this.refs.newTodoTitle.value,
            done: false
        };
        this.props.submitCallback(newTodo);
        this.refs.newTodoTitle.value = '';
    }
}