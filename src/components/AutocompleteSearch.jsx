import "./autocompleteSearch.css";
import { useEffect, useState } from "react";
import data from "./../data.json";

function AutocompleteSearch() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(
      data.filter((data) => data.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = (suggestion) => {
    setSearch(suggestion);
  };

  return (
    <div className="autoSearch">
      <div className="inputSearch">
        <h1>AutoComplete Search</h1>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      {search.length > 0 && (
        <div className="searchResult">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((data) => (
                <li onClick={() => handleClick(data)} key={data}>
                  {data}
                </li>
              ))}
            </ul>
          ) : (
            <span>No Results Found</span>
          )}
        </div>
      )}
    </div>
  );
}

export default AutocompleteSearch;
