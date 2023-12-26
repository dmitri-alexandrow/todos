export default function App() {
  return (
    <>
      <section className='todos' id='todos'>
        <header className="todos__header">
          <h1 className="todos__title">Todos</h1>
          <input className="todos__input" type="text" placeholder="Что необходимо сделать?" />
        </header>
        <section className="todos__main">
          <ul className="todos__list">
            <li className="todos__item">
              <input className="todos__checkbox checkbox" id="q1" type="checkbox" />
              <label className="checkbox__label" htmlFor="q1"></label>
              <p className="todos__task-text">Жопная вонь</p>
              <button className="todos__close-button close-button"/>
            </li>
            <li className="todos__item completed">
              <input className="todos__checkbox checkbox" id="q2" type="checkbox" />
              <label className="checkbox__label" htmlFor="q2"></label>
              <p className="todos__task-text">Анусный ковбой</p>
              <button className="todos__close-button close-button"/>
            </li>
            <li className="todos__item">
              <input className="todos__checkbox checkbox" id="q3" type="checkbox" />
              <label className="checkbox__label" htmlFor="q3"></label>
              <p className="todos__task-text">Синий солетёр</p>
              <button className="todos__close-button close-button"/>
            </li>
          </ul>
        </section>
        <footer className="todos__footer">
          <span className="todos__counter">Задач осталось 4</span>
          <ul className="todos__filters horizontal-filters">
            <li className="horizontal-filters__item">
              <button className="button">Все</button>
            </li>
            <li className="horizontal-filters__item">
              <button className="button active">Активные</button>
            </li>
            <li className="horizontal-filters__item">
              <button className="button">Завершенные</button>
            </li>
          </ul>
          <button className="todos__button link-button active">Очистить</button>
        </footer>
      </section>
    </>
  )
}