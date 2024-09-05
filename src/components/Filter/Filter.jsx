import { useState } from "react";
import "./filter.scss";

function Filter({ filter, setFilter }) {
  function handleFilter(filter) {
    setFilter(filter);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter-form">
      <label htmlFor="filter">Filter</label>
      <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
        <option value="all">All Lists</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </form>
  );
}

export default Filter;
