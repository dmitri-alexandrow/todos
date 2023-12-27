import Button from "../button/Button";
import Filter from "../filter/Filter";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import TodoItem from "../todoItem/TodoItem";
import './Todos.scss';

export default function Todos({ className, id }) {
  return (
    <section className={className ?? 'todos'} id={id}>

      <header className="todos__header">
        <Heading className='todos__heading heading'>Todos</Heading>
        <Input className="todos__input input input--text" type="text" placeholder="Что необходимо сделать?" />
      </header>

      <section className="todos__main">
        <ul className="todos__list">
          <TodoItem>Сходить за хлебом</TodoItem>
          <TodoItem>Провести генеральную уборку</TodoItem>
          <TodoItem>Позвонить родственникам</TodoItem>
        </ul>
      </section>

      <footer className="todos__footer">
        <span className="todos__counter">Задач осталось 4</span>
        <Filter className='todos__filters filter filter--horizontal' />
        <Button className="todos__button button--link active">Очистить</Button>
      </footer>

    </section>
  )
}