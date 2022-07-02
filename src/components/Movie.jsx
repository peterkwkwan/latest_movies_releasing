import React, { useEffect, useState } from "react";

export const Movie = ({ id, title, release_date, poster_path }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [moviesDetails, setMovieDetails] = useState(null);
  const imgPath = `
    https://image.tmdb.org/t/p/w500${poster_path}`;

  const fetchDetails = () => {
    const apiKey = "9f1aabd12914b171540ce3c70fe36b7d";

    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  };

  const handleClick = () => {
    fetchDetails();
    setShowDetails((prevState) => !prevState);
  };
  return (
    <div>
      <div onClick={handleClick} className="text-2xl">
        Title: {title} - Year: {release_date?.substring(0, 4)}
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
