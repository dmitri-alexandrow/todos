import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;