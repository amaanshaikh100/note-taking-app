import { useState } from "react";
import "./search.scss";

function Search({ allLists, query, setQuery, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-search">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery((e) => e.target.value)}
          placeholder="Search Your List..."
        />

        <button>Search</button>
      </form>
    </>
  );
}

export default Search;
