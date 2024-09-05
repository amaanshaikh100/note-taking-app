import { useState } from "react";
import "./search.scss";

function Search() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="form-search">
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
}

export default Search;
