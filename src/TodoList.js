import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
  function handleRemoveClick(id) {
    props.dispatch({ type: 'REMOVE_TODO', id });
  }

  function handleMarkDoneClick(id) {
    props.dispatch({ type: 'MARK_TODO_DONE', id });
  }

  return (
    <ul>
      {props.todos
        .filter(todo => !todo.done)
        .map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleMarkDoneClick(todo.id)}>Done</button>
            <button onClick={() => handleRemoveClick(todo.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps)(TodoList);
