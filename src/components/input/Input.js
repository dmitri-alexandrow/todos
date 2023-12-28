import './Input.scss';

export default function Input({className, type, placeholder, ...restProps}) {
  return (
    <input className={className ?? "input"} type={type ?? "text"} placeholder={placeholder ?? 'Введите текст..'} {...restProps} />
  )
}