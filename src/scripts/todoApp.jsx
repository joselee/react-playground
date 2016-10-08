import React from 'react';
import {TodoListItem} from './todoListItem';

export class TodoApp extends React.Component {
    render() {
        const todos = [
            {id: 1, title: 'Do dishes', created: new Date(), done: false},
            {id: 2, title: 'Do laundry', created: new Date(), done: true},
            {id: 3, title: 'Walk dog', created: new Date(), done: false},
            {id: 4, title: 'Feed baby', created: new Date(), done: false}
        ];

        const todoNodes = todos.map((todo) => {
            return (<TodoListItem title={todo.title} key={todo.id} />);
        });

        return (
            <div className="todo-app">
                <h1>todos</h1>
                <ul>{todoNodes}</ul>
            </div>
        );
    }
}