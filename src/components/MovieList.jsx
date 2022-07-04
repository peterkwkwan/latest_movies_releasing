import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";

export const MovieList = ({ page }) => {
  const [movies, setMovies] = useState([]);

  const apiKey = "9f1aabd12914b171540ce3c70fe36b7d";
  const apiUrl = `
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [apiUrl]);
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};
