import { readFromLocalStorage } from "./utils";
/* Example
export const STORE = [
  {
    id: 1,
    text: 'Сходить за хлебом',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Провести генеральную уборку',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Позвонить родственникам',
    isCompleted: false
  }
];
*/

export const STORE = readFromLocalStorage('taskList');