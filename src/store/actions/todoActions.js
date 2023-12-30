export const createTodo = text => {
  return {
    type: "todos/createTodo",
    payload: text
  };
};

export const removeTodo = text => {
  return {
    type: "todos/removeTodo",
    payload: text
  };
};

export const updateTodo = text => {
  return {
    type: "todos/updateTodo",
    payload: text
  };
};

export const toggleTodo = text => {
  return {
    type: "todos/toggleTodo",
    payload: text
  };
};

export const removeCompletedTodo = text => {
  return {
    type: "todos/removeCompletedTodo",
    payload: text
  };
};

export const toggleAllTodo = text => {
  return {
    type: "todos/toggleAllTodo",
    payload: text
  };
};