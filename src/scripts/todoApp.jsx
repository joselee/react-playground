import React from 'react';
import {TodoListItem} from './todoListItem';
import {TodoAddForm} from './todoAddForm';
import {TodoControls} from './todoControls';

export class TodoApp extends React.Component {
    constructor () {
        super();
        this.state = {
            todos: [
                {id: 1, title: 'Do dishes', done: false},
                {id: 2, title: 'Do laundry', done: true},
                {id: 3, title: 'Walk dog', done: false},
                {id: 4, title: 'Feed baby', done: false}
            ],
            filters: {
                all: true,
                active: false,
                done: false,
            }
        };
    }

    addNewTodo(newTodo) {
        this.setState({todos: this.state.todos.concat(newTodo)});
    }

    toggleComplete(todoId) {
        let itemToUpdate = this.state.todos.find((todo) => todo.id === todoId);
        itemToUpdate.done = !itemToUpdate.done;
        this.setState({todos: this.state.todos});
    }

    setFilter(filterType) {
        if (filterType === 'all') {
            this.setState({filters: {
                all: true,
                active: false,
                done: false,
            }});
        }
        else if (filterType === 'active') {
            this.setState({filters: {
                all: false,
                active: true,
                done: false,
            }});
        }
        else if (filterType === 'done') {
            this.setState({filters: {
                all: false,
                active: false,
                done: true,
            }});
        }
    }

    render() {
        let todoNodes;
        
        if (this.state.filters.all) {
            todoNodes = this.state.todos.map((todo) => {
                return (<TodoListItem todo={todo} toggleComplete={this.toggleComplete.bind(this)} key={todo.id} />);
            });
        }

        if (this.state.filters.active) {
            todoNodes = this.state.todos.map((todo) => {
                if (!todo.done) {
                    return (<TodoListItem todo={todo} toggleComplete={this.toggleComplete.bind(this)} key={todo.id} />);
                }
            });
        }
        if (this.state.filters.done) {
            todoNodes = this.state.todos.map((todo) => {
                if (todo.done) {
                    return (<TodoListItem todo={todo} toggleComplete={this.toggleComplete.bind(this)} key={todo.id} />);
                }
            });
        }

        return (
            <div className="todo-app">
                <h1 className="todo-app-header">TODOS</h1>
                <div className="todo-app-body">
                    <TodoAddForm submitCallback={this.addNewTodo.bind(this)} />
                    <TodoControls filters={this.state.filters} setFilter={this.setFilter.bind(this)} />
                    <ul className="todo-list-items">{todoNodes}</ul>
                </div>
            </div>
        );
    }
}