import React, { useEffect, useState } from "react";
import { fetchAllMovies } from "../utils/api";
import { Movie } from "./Movie";

export const MovieList = ({ page }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const callMoviesApi = async () => {
      const results = await fetchAllMovies(page);
      setMovies(results);
    };

    callMoviesApi();
  }, [page]);

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};
