import "./Filter.scss";
import Button from "../button/Button";
import { useState } from "react";

export default function Filter({ className, onClick }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <ul className={className ?? "filter"}>
      <li className="filter__item">
        <Button className={`button${currentFilter == "all" ? " active" : ""}`} onClick={() => {
          setCurrentFilter("all");
          onClick("all");
        }}>Все</Button>
      </li>
      <li className="filter__item">
        <Button className={`button${currentFilter == "active" ? " active" : ""}`} onClick={() => {
          setCurrentFilter("active");
          onClick("active");
        }}>Активные</Button>
      </li>
      <li className="filter__item">
        <Button className={`button${currentFilter == "completed" ? " active" : ""}`} onClick={() => {
          setCurrentFilter("completed");
          onClick("completed");
        }}>Завершенные</Button>
      </li>
    </ul>
  );
}