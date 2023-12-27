import './Checkbox.scss';

export default function Checkbox({ className, id }) {
  return (
    <>
      <input className={className ?? 'checkbox'} id={id} type="checkbox" />
      <label className="checkbox__label" htmlFor={id}></label>
    </>
  )
}