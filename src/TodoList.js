import React, { Component } from 'react';
import {todos} from './seedData';
import TodoItem from './TodoItem';
import TodoCreationBar from './TodoCreationBar';
import TodoFilterBar from './TodoFilterBar';

class TodoList extends Component {
    state = {
        toDos: todos,
        filterString: ''
    }
    render() {
        let {toDos, filterString} = this.state;
        return (
            <div>
                <TodoCreationBar handleAdd={this.handleAdd}/>
                <TodoFilterBar handleFilter={this.handleFilter} handleRemoveFilter={this.handleRemoveFilter}/>
             <ul>
                {toDos.filter(todo=> {return filterString==='' || todo.name.toLowerCase().includes(filterString.toLowerCase())})
                    .map(todo => <TodoItem handleClick={this.handleClick} key={todo.id} item={todo.name} isCompleted={todo.isCompleted}/>)}
            </ul>
            </div>
        );
    }

    handleRemoveFilter= () => {
        this.setState({filterString:''});
    }

    handleFilter = (filter) => {
        this.setState({filterString:filter});
    }

    handleClick = (itemId) => {
        let updatedList = this.state.toDos.map(todo => {
            return ({name: todo.name, isCompleted:todo.name===itemId?!todo.isCompleted:todo.isCompleted})
        });
        this.setState({toDos:updatedList});
    }

    handleAdd = (itemId) => {
        let updatedList = [...this.state.toDos];
        updatedList.push({name:itemId, isCompleted:false})
        this.setState({toDos:updatedList, filterString:this.state.filterString});
    }
}

export default TodoList;
