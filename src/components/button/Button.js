import "./Button.scss";

export default function Button({ children, className, type, ...restProps }) {
  return (
    <button className={className ?? "button"} type={type ?? "button"} {...restProps}>{children}</button>
  );
}