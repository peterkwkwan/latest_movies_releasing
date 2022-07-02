import { useState } from "react";
import { Movie } from "./components/Movie";
import { MovieList } from "./components/MovieList";

function App() {
  const [page, setPage] = useState(1);
  const [searchStr, setSearchStr] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "9f1aabd12914b171540ce3c70fe36b7d";
  const fetchSearchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchStr}&page=1&include_adult=false`;

  const fetchSearchMovie = () => {
    fetch(fetchSearchMovieUrl)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.results));
  };

  const handlePreviousClicked = () => {
    setPage(page - 1);
  };

  const handleNextClicked = () => {
    setPage(page + 1);
  };

  const handleKeyPress = (event) => {
    setSearchStr(event.target.value);
  };

  const handleSearch = () => {
    fetchSearchMovie();
  };

  return (
    <div>
      <h1>Movie App</h1>

      <input type="string" onChange={handleKeyPress} />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>

      {searchResults?.length > 0 ? (
        searchResults?.map((movie) => {
          return <Movie key={movie.title} {...movie} />;
        })
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
