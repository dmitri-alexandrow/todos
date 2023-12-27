import './Checkbox.scss';

export default function Checkbox({ className, id, onClick }) {
  return (
    <>
      <input className={className ?? 'checkbox'} onClick={onClick} type="checkbox" id={id} />
      <label className="checkbox__label" htmlFor={id}></label>
    </>
  )
}