const initialState = { todos: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.id) };
    case 'MARK_TODO_DONE':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: true } : todo
        )
      };
    default:
      return state;
  }
}

export default reducer;
