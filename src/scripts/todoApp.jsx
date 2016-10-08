import React from 'react';
import {TodoListItem} from './todoListItem';
import {TodoAddForm} from './todoAddForm';

export class TodoApp extends React.Component {
    constructor () {
        super();
        this.state = {
            todos : [
                {id: 1, title: 'Do dishes', done: false},
                {id: 2, title: 'Do laundry', done: true},
                {id: 3, title: 'Walk dog', done: false},
                {id: 4, title: 'Feed baby', done: false}
            ]
        };
    }

    addNewTodo(newTodo) {
        this.setState({todos: this.state.todos.concat(newTodo)});
    }

    render() {
        const todoNodes = this.state.todos.map((todo) => {
            return (<TodoListItem title={todo.title} key={todo.id} />);
        });

        return (
            <div className="todo-app">
                <h1>todos</h1>
                <TodoAddForm submitCallback={this.addNewTodo.bind(this)} />
                <ul>{todoNodes}</ul>
            </div>
        );
    }
}