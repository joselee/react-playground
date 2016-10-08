import React from 'react';

export class TodoControls extends React.Component {
    setFilterAll() {
        this.props.setFilter('all');
    }
    setFilterActive() {
        this.props.setFilter('active');
    }
    setFilterDone() {
        this.props.setFilter('done');
    }
    render() {
        return (
            <div className="todo-controls">
                <div className="filter-buttons">
                    <label>Filter by: </label>
                    <span className={this.props.filters.all ? 'active' : 'inactive'} onClick={this.setFilterAll.bind(this)}>all</span>
                    <span className={this.props.filters.active ? 'active' : 'inactive'} onClick={this.setFilterActive.bind(this)}>active</span>
                    <span className={this.props.filters.done ? 'active' : 'inactive'} onClick={this.setFilterDone.bind(this)}>done</span>
                </div>
            </div>
        );
    }
}