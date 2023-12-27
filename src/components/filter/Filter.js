import './Filter.scss';
import Button from '../button/Button';

export default function Filter({ className }) {
  return (
    <ul className={className ?? 'filter'}>
      <li className="filter__item">
        <Button>Все</Button>
      </li>
      <li className="filter__item">
        <Button>Активные</Button>
      </li>
      <li className="filter__item">
        <Button>Завершенные</Button>
      </li>
    </ul>
  )
}