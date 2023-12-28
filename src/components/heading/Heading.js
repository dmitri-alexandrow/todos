import './Heading.scss';

export default function Heading({ children, tag, className, id }) {
  let heading = null;

  switch (tag) {
    case 'h2':
      heading = <h2 className={className ?? 'heading'} id={id}>{children}</h2>;
      break;
    case 'h3':
      heading = <h3 className={className ?? 'heading'} id={id}>{children}</h3>;
      break;
    case 'h4':
      heading = <h4 className={className ?? 'heading'} id={id}>{children}</h4>;
      break;
    case 'h5':
      heading = <h5 className={className ?? 'heading'} id={id}>{children}</h5>;
      break;
    case 'h6':
      heading = <h6 className={className ?? 'heading'} id={id}>{children}</h6>;
      break;
    default:
      heading = <h1 className={className ?? 'heading'} id={id}>{children}</h1>;
    }

  return heading;
}