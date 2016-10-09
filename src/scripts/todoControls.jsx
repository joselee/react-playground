import React from 'react';

export class TodoControls extends React.Component {
    render() {
        return (
            <div className="todo-controls">
                <div className="filter-buttons">
                    <label>Filter by: </label>
                    <span className={this.props.filters.all ? 'active' : ''} onClick={this.props.setFilter.bind(this, 'all')}>all</span>
                    <span className={this.props.filters.active ? 'active' : ''} onClick={this.props.setFilter.bind(this, 'active')}>active</span>
                    <span className={this.props.filters.done ? 'active' : ''} onClick={this.props.setFilter.bind(this, 'done')}>done</span>
                </div>
            </div>
        );
    }
}