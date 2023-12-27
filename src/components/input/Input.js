import './Input.scss';

export default function Input({className, id, type, placeholder}) {
  return (
    <input className={className ?? "input"} type={type ?? "text"} id={id} placeholder={placeholder ?? 'Введите текст..'} />
  )
}