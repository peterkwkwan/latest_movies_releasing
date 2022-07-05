import { useState } from "react";
import { Buttons } from "./components/Buttons";
import { MovieList } from "./components/MovieList";
import { SearchBox } from "./components/SearchBox";
import { SearchResults } from "./components/SearchResults";

function App() {
  const [page, setPage] = useState(1);

  const [searchStr, setSearchStr] = useState("");
  const [fetching, setFetching] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const handlePreviousClicked = () => {
    setPage(page - 1);
  };

  const handleNextClicked = () => {
    setPage(page + 1);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleSearchChange = (event) => {
    setSearchStr(event.target.value);
  };

  const handleToggleFetching = (isFetching) => {
    setFetching(isFetching);
  };

  return (
    <div className="bg-primary-lightest py-6 pl-6">
      <h1 className="font-bold text-gray-dark text-5xl underline">MovieDB</h1>
      <h6 className="italic text-2xl pt-2">Latest Movies Releasing</h6>

      <SearchBox
        handleSearchResults={handleSearchResults}
        handleSearchChange={handleSearchChange}
        handleToggleFetching={handleToggleFetching}
        searchStr={searchStr}
      />

      {searchStr === "" ? (
        <MovieList page={page} />
      ) : searchResults.length === 0 ? (
        <h1 className="text-secondary-main font-bold text-xl my-4">
          {fetching ? "Searching . . ." : "No results!"}
        </h1>
      ) : (
        <SearchResults results={searchResults} />
      )}

      {searchStr === "" && (
        <Buttons
          page={page}
          handlePreviousClicked={handlePreviousClicked}
          handleNextClicked={handleNextClicked}
        />
      )}
    </div>
  );
}

export default App;
