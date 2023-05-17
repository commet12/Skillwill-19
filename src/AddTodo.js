import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddTodo(props) {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAddClick() {
    const id = Date.now();
    const todo = { id, text, done: false };
    props.dispatch({ type: 'ADD_TODO', todo });
    setText('');
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default connect()(AddTodo);
