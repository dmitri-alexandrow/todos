import { useState } from "react";
import Button from "../button/Button";
import Filter from "../filter/Filter";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import TodoItem from "../todoItem/TodoItem";
import { STORE } from "../../data";
import './Todos.scss';

export default function Todos({ className, id }) {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(STORE);

  function createTask() {
    // создать новую задачу и обновить состояние
    setTasks([
      ...tasks,
      {
        id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
        text: text,
        isCompleted: false
      }
    ]);
    // очистить поле ввода
    setText('');
  }

  function removeTask(id) {
    // удалить задачу, нажав на красный крестик
    setTasks(
      [...tasks].filter(task => task.id !== id)
    )
  }

  function completeTask(id) {
    // обновить статус задачи (активна/завершена)
    const copy = [...tasks];
    const task = copy.find(task => task.id == id);
    task.isCompleted = !(task.isCompleted);
    setTasks(copy);
  }

  return (
    <section className={className ?? 'todos'} id={id}>

      <header className="todos__header">
        <Heading className='todos__heading heading'>Todos</Heading>
        <div className="todos__input-wrapper">
          <Button className={`todos__select-button button--select${tasks.length ? ' active' : ''}`} />
          <Input
            className='todos__input input input--text'
            type="text"
            placeholder="Что сделаем?"
            onChange={(event) => setText(event.target.value)}
            value={text}
            onKeyPress={(event) => {
              if (event.key == 'Enter') {
                createTask();
              }
            }}
            id='todoInput' />
          <Button
            className='todos__send-button button--send'
            id='todoSend'
            onClick={createTask} />
        </div>
      </header>

      <section className="todos__main">
        <ul className="todos__list">
          {
            tasks.map(task => {
              return <TodoItem
                onCheckboxClick={() => completeTask(task.id)}
                onCloseButtonClick={() => removeTask(task.id)}
                key={task.id}
                isCompleted={task.isCompleted}>
                {task.text}
              </TodoItem>;
            })
          }
        </ul>
      </section>

      <footer className="todos__footer">
        <span className="todos__counter">Задач осталось {tasks.length - tasks.filter(task => task.isCompleted).length}</span>
        <Filter className='filter filter--horizontal' />
        <Button className="todos__button button--link active">Очистить</Button>
      </footer>

    </section>
  )
}