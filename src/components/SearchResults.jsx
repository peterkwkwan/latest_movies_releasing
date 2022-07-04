import React from "react";
import { Movie } from "./Movie";

export const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((movie) => {
        return <Movie key={movie.id} {...movie} />;
      })}
    </>
  );
};
