import { useId } from "react";
import './TodoItem.scss';
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

export default function TodoItem({ children }) {
  const id = useId();

  return (
    <li className="todos__item">
      <Checkbox className='todos__checkbox checkbox' id={id} />
      <p className="todos__task-text">{children}</p>
      <Button className="todos__close-button button--close" />
    </li>
  )
}