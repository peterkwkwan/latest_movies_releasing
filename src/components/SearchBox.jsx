import React, { useRef } from "react";
import { fetchSearchResults } from "../utils/api";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

export const SearchBox = ({
  handleSearchResults,
  handleSearchChange,
  handleToggleFetching,
  searchStr,
}) => {
  const timeout = useRef();

  const handleSearch = () => {
    clearTimeout(timeout.current);
    handleToggleFetching(true);

    if (!searchStr.trim()) {
      handleToggleFetching(false);
      return;
    }

    timeout.current = setTimeout(async () => {
      const results = await fetchSearchResults(searchStr);
      handleSearchResults(results);
      handleToggleFetching(false);
    }, 700);
  };

  const handleKeyPress = (event) => {
    handleSearch();
    handleSearchChange(event);
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
