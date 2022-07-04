import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../utils/api";

export const Movie = ({ id, title, release_date, poster_path }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [moviesDetails, setMovieDetails] = useState(null);
  const imgPath = `
    https://image.tmdb.org/t/p/w500${poster_path}`;

  const fetchDetails = async () => {
    const result = await fetchMovieDetails(id);
    setMovieDetails(result);
  };

  const handleClick = () => {
    fetchDetails();
    setShowDetails((prevState) => !prevState);
  };
  return (
    <div className="bg-primary-light mb-4 mx-6 rounded-lg border border-primary-main">
      <div onClick={handleClick} className="text-2xl ml-4 text-gray-darkest">
        {title} ({release_date?.substring(0, 4)})
        <img src={imgPath} width="200px" />
      </div>

      {showDetails && (
        <div>
          <div>
            Genre:
            {moviesDetails?.genres?.map((genre) => {
              return `${genre.name},`;
            })}
          </div>
          <div>Status: {moviesDetails?.status}</div>
          <div>Rating: {moviesDetails?.vote_average}</div>

          <div>Release Date: {release_date}</div>
        </div>
      )}
    </div>
  );
};
