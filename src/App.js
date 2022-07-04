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
    <div>
      <h1 className="text-3xl ml-6 font-bold text-primary-main">
        Latest Movies Releasing
      </h1>

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
