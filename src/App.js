import { useState } from "react";
import { MovieList } from "./components/MovieList";
import { SearchBox } from "./components/SearchBox";
import { SearchResults } from "./components/SearchResults";

function App() {
  const [page, setPage] = useState(1);

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

  return (
    <div className="bg-primary-lightest pt-6 pl-6">
      <h1 className="font-bold text-gray-dark text-5xl underline">MovieDB</h1>
      <h6 className="italic text-2xl pt-2">Latest Movies Releasing</h6>

      <SearchBox handleSearchResults={handleSearchResults} />

      {searchResults?.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <MovieList page={page} />
      )}

      {page !== 1 && (
        <button type="button" onClick={handlePreviousClicked}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={handleNextClicked}>
        Next Page
      </button>
    </div>
  );
}

export default App;
