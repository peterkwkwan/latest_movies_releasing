import React, { useRef, useState } from "react";
import { fetchSearchResults } from "../utils/api";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

export const SearchBox = ({ handleSearchResults }) => {
  const [searchStr, setSearchStr] = useState("");

  const timeout = useRef();

  const handleSearch = () => {
    clearTimeout(timeout.current);

    if (!searchStr.trim()) {
      return;
    }

    timeout.current = setTimeout(async () => {
      const results = await fetchSearchResults(searchStr);
      handleSearchResults(results);
    }, 700);
  };

  const handleKeyPress = (event) => {
    handleSearch();
    setSearchStr(event.target.value);
  };

  return (
    <div className="flex my-6 items-end">
      <SearchIcon />
      <input
        type="string"
        onChange={handleKeyPress}
        id="search"
        placeholder="Search for movies"
        className="rounded-t w-80 border-b ml-2 border-gray focus:border-primary-main focus:outline-none
        placeholder:italic placeholder:text-gray-dark placeholder:pl-1 text-gray-dark text-3xl"
      />
    </div>
  );
};
