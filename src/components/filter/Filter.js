import './Filter.scss';
import Button from '../button/Button';
import { useState } from 'react';

export default function Filter({ className, taskList, onClick }) {
  const [currentFilter, setCurrentFilter] = useState('all');
  return (
    <ul className={className ?? 'filter'}>
      <li className="filter__item">
        <Button className={`button${currentFilter == 'all' ? ' active' : ''}`} onClick={() => {
          onClick(taskList);
          setCurrentFilter('all');
        }}>Все</Button>
      </li>
      <li className="filter__item">
        <Button className={`button${currentFilter == 'active' ? ' active' : ''}`} onClick={() => {
          const filteredList = taskList.filter(task => task.isCompleted == false);
          onClick(filteredList);
          setCurrentFilter('active');
        }}>Активные</Button>
      </li>
      <li className="filter__item">
        <Button className={`button${currentFilter == 'completed' ? ' active' : ''}`} onClick={() => {
          const filteredList = taskList.filter(task => task.isCompleted == true);
          onClick(filteredList);
          setCurrentFilter('completed');
        }}>Завершенные</Button>
      </li>
    </ul>
  )
}