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
      <input
        type="string"
        onChange={handleKeyPress}
        id="search"
        placeholder="Search for movies"
        className="border-b ml-6 my-4 border-gray focus:border-primary-light focus:outline-none
        placeholder:italic placeholder:text-primary-light placeholder:pl-1 text-primary-main"
      />
    </div>
  );
};
