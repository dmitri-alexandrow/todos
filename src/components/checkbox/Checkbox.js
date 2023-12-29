import './Checkbox.scss';

export default function Checkbox({ className, id, onClick, isCompleted }) {
  return (
    <>
      <input className={`${className} ${isCompleted ? ' completed' : ''}`} onClick={onClick} type="checkbox" id={id} />
      <label className={`checkbox__label${isCompleted ? ' completed' : ''}`} htmlFor={id}></label>
    </>
  )
}