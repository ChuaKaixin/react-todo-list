import React, { Component } from 'react';

class TodoCreationBar extends Component {
    state = {
        inputValue : ''
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.inputValue} placeholder="Please enter your task" type="text" ref="newItem" onChange={this.handleChange} />
            <button onClick={()=>this.props.handleAdd(this.state.inputValue)}>Add</button>
        </form>);
    }

    handleChange= (event) =>  {
        this.setState({inputValue: event.target.value});
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({inputValue: ''});
        //this.refs['newItem'].value=''
    }
}

export default  TodoCreationBar;
