import React from 'react';

export class TodoListItem extends React.Component {
    render() {
        return (
            <li>{this.props.title}</li>
        );
    }
}