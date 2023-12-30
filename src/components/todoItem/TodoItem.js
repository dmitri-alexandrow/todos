import { useId, useState } from "react";
import "./TodoItem.scss";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import Input from "../input/Input";

export default function TodoItem({ children, removeTask, onCheckboxClick, isCompleted, onInput, currentText }) {
  const [isEdit, setEdit] = useState(false);
  const id = useId();
  let nextText = currentText;

  function toggleEditStatus() {
    if (!isCompleted) {
      setEdit(!isEdit);
    }
  }

  function handleDoubleClick() {
    toggleEditStatus();
  }

  function handleInput(event) {
    nextText = event.target.value;
  }

  return (
    <li className={`todos__item${isCompleted ? " completed" : ""}`} >

      <Checkbox
        className='todos__checkbox checkbox'
        isCompleted={isCompleted}
        onClick={onCheckboxClick}
        id={id} />

      {isEdit ?
        <div className="todos__update-input-wrapper">
          <Input
            className='input input--text todos__item-edit'
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                toggleEditStatus();
                if (!nextText) {
                  removeTask();
                }
              }
            }}
            onBlur={toggleEditStatus}
            value={nextText}
            onInput={(event) => {
              handleInput(event);
              onInput(nextText);
            }}
          />
          <Button
            className='todos__update-button button--send'
            id='todoSend'
            onClick={toggleEditStatus} />
        </div> :
        <p className={`todos__task-text${isCompleted ? " completed" : ""}`}
          onDoubleClick={() => {
            handleDoubleClick();
          }}>
          {children}
        </p>
      }

      <Button
        className="todos__close-button button--close"
        onClick={removeTask} />
    </li>
  );
}