import React, { useState } from "react";
import { fetchSearchResults } from "../utils/api";

export const SearchBox = ({ handleSearchResults }) => {
  const [searchStr, setSearchStr] = useState("");

  const handleSearch = async () => {
    const results = await fetchSearchResults(searchStr);
    handleSearchResults(results);
  };

  const handleKeyPress = (event) => {
    setSearchStr(event.target.value);
  };

  return (
    <div>
      {" "}
      <input type="string" onChange={handleKeyPress} />
      <button
        className="text-secondary-main"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
