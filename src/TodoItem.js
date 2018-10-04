import React from 'react';

const TodoItem = (props) => {
    return (
        <li onClick={() => props.handleClick(props.item)}>
            {props.isCompleted && <strike>{props.item}</strike>}
            {!props.isCompleted && props.item}
        </li>
    );
}


export default TodoItem;
