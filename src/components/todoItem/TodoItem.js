import { useId } from "react";
import './TodoItem.scss';
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

export default function TodoItem({ children, onCloseButtonClick, onCheckboxClick, isCompleted }) {
  const id = useId();

  return (
    <li className={`todos__item${isCompleted ? ' completed' : ''}`}>
      <Checkbox className='todos__checkbox checkbox' onClick={onCheckboxClick} id={id} />
      <p className="todos__task-text active">{children}</p>
      <Button className="todos__close-button button--close" onClick={onCloseButtonClick} />
    </li>
  )
}