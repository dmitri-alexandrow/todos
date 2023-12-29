const create = text => {
  return {
    type: 'todos/createTodo',
    payload: text
  }
};

const remove = text => {
  return {
    type: 'todos/removeTodo',
    payload: text
  }
};

const update = text => {
  return {
    type: 'todos/updateTodo',
    payload: text
  }
};

const toggle = text => {
  return {
    type: 'todos/toggleTodo',
    payload: text
  }
};

const removeCompleted = text => {
  return {
    type: 'todos/removeCompletedTodo',
    payload: text
  }
};

const toggleAll = text => {
  return {
    type: 'todos/toggleAllTodo',
    payload: text
  }
};