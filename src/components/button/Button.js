import './Button.scss';

export default function Button({ children, className, id, type }) {
  return (
    <button className={className ?? 'button'} id={id} type={type ?? 'button'}>{children}</button>
  )
}