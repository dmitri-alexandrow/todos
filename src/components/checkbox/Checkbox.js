import './Checkbox.scss';

export default function Checkbox({ className, id, onClick, isCompleted }) {
  return (
    <>
      <input className={className ?? 'checkbox'} onClick={onClick} type="checkbox" id={id} />
      <label className={`checkbox__label${isCompleted ? ' completed' : ''}`} htmlFor={id}></label>
    </>
  )
}