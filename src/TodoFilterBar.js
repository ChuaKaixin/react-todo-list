import React, { Component } from 'react';

class TodoFilterBar extends Component {    
    state = {
        inputValue : ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} placeholder="Enter filter" type="text" onChange={this.handleChange}/>
                <button onClick={()=>this.props.handleFilter(this.state.inputValue)}>Filter</button>
                <button onClick={this.handleRemoveFilter}>See All ToDos</button>
                </form>
            </div>
        );
    }
    
    handleChange= (event) =>  {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleRemoveFilter = () => {
        this.props.handleRemoveFilter();
        this.setState({inputValue: ''});
    }
}

export default TodoFilterBar;
