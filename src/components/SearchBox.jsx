import React, { useRef, useState } from "react";
import { fetchSearchResults } from "../utils/api";

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
