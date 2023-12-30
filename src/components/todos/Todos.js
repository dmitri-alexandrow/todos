import { useEffect, useState } from "react";
import Button from "../button/Button";
import Filter from "../filter/Filter";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import TodoItem from "../todoItem/TodoItem";
import { STORE, INITIAL_STORE } from "../../data";
import { setToLocalStorage } from "../../utils";
import "./Todos.scss";

export default function Todos({ className, id }) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(STORE ?? INITIAL_STORE);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setToLocalStorage("taskList", tasks);
  }, [tasks]);

  function createTask() {
    // создать новую задачу и обновить состояние
    if (text) {
      setTasks([
        ...tasks,
        {
          id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
          text: text,
          isCompleted: false
        }
      ]);
    }
    // очистить поле ввода
    setText("");
  }

  function updateTask(id) {
    return function (updatedText) {
      const copy = [...tasks];
      const task = copy.find(task => task.id == id);
      task.text = updatedText;
      setTasks(copy);
    };
  }

  function removeTask(id) {
    // удалить задачу, нажав на красный крестик
    setTasks(
      [...tasks].filter(task => task.id !== id)
    );
  }

  function removeCompletedTasks() {
    // удалить все завершенные задачи
    setTasks(
      [...tasks].filter(task => task.isCompleted == false)
    );
  }

  function toggleCompleteTask(id) {
    // обновить статус задачи (активна/завершена)
    const copy = [...tasks];
    const task = copy.find(task => task.id == id);
    task.isCompleted = !(task.isCompleted);
    setTasks(copy);
  }

  function toggleCompleteAllTasks() {
    // обновить статус всех задач (активны/завершены)
    const copy = [...tasks];
    if (tasks[0].isCompleted) {
      copy.map(task => task.isCompleted = false);
    } else {
      copy.map(task => task.isCompleted = true);
    }
    setTasks(copy);
  }

  function getFilter(className) {
    setFilter(className);
  }

  return (
    <section className={className ?? "todos"} id={id}>

      <header className="todos__header">
        <Heading className='todos__heading heading'>Todos</Heading>
        <div className="todos__input-wrapper">
          <Button className={`todos__select-button button--select${tasks.length ? " active" : ""}`} onClick={() => toggleCompleteAllTasks()} />
          <Input
            className='todos__input input input--text'
            type="text"
            placeholder="Что сделаем?"
            onInput={(event) => setText(event.target.value)}
            value={text}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                createTask();
              }
            }}
            id='todoInput' />
          <Button
            className={`todos__send-button button--send${text ? " active" : ""}`}
            id='todoSend'
            onClick={createTask} />
        </div>
      </header>

      <section className="todos__main">
        <ul className={`todos__list ${filter}`}>
          {
            tasks.map(task => {
              return <TodoItem
                key={task.id}
                currentText={task.text}
                onCheckboxClick={() => toggleCompleteTask(task.id)}
                removeTask={() => removeTask(task.id)}
                onInput={updateTask(task.id)}
                isCompleted={task.isCompleted}>
                {task.text}
              </TodoItem>;
            })
          }
        </ul>
      </section>

      <footer className="todos__footer">
        <span className="todos__counter">Задач осталось {tasks.length - tasks.filter(task => task.isCompleted).length}</span>
        <Filter
          className='filter filter--horizontal'
          onClick={getFilter}
        />
        <Button
          className={`todos__button button--link${tasks.filter(task => task.isCompleted).length ? " active" : ""}`}
          onClick={removeCompletedTasks}>
          Очистить
        </Button>
      </footer>

    </section>
  );
}