export const initialState = [
  {
    id: 1,
    text: "Мой первый таск",
    isCompleted: false
  }
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
  case "todos/createTodo": {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: nextTodoId(state.todos),
          text: action.payload,
          completed: false
        }
      ]
    };
  }
  default:
    return state;
  }
}