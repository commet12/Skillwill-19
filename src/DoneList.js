import React from 'react';
import { connect } from 'react-redux';

function DoneList(props) {
  return (
    <ul>
      {props.todos
        .filter(todo => todo.done)
        .map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps)(DoneList);
