import { readFromLocalStorage } from "./utils";

export const STORE = readFromLocalStorage("taskList");
export const INITIAL_STORE = [{
  id: 1,
  text: "Мой первый таск",
  isCompleted: false
}];