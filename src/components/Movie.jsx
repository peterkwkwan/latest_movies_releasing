import React, { useRef, useState } from "react";
import { fetchMovieDetails } from "../utils/api";

export const Movie = ({ id, title, release_date, poster_path }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const alreadyFetched = useRef();

  const imgPath = `
    https://image.tmdb.org/t/p/w500${poster_path}`;

  const fetchDetails = async () => {
    const result = await fetchMovieDetails(id);
    alreadyFetched.current = true;
    setMovieDetails(result);
  };

  const handleClick = () => {
    if (alreadyFetched.current !== true) fetchDetails();
    setShowDetails((prevState) => !prevState);
  };

  const Placeholder = () => {
    return <span className="h-4 w-12 bg-gray rounded inline-block"></span>;
  };

  const GenreTag = ({ genre }) => {
    return (
      <span className="rounded border-2 border-gray-light bg-gray-dark font-bold text-gray-light mr-2 p-1">
        {genre}
      </span>
    );
  };

  return (
    <div className="bg-primary-lightest mb-4 mx-6 rounded-lg border border-primary-main cursor-pointer">
      <div
        onClick={handleClick}
        className="text-2xl ml-4 text-gray-darkest font-bold"
      >
        {title}{" "}
        <span className="font-normal">({release_date?.substring(0, 4)})</span>
        <img src={imgPath} width="200px" alt={title} />
      </div>

      <div className={`${showDetails ? "block" : "hidden"} m-4`}>
        <div>
          {!movieDetails ? (
            <Placeholder />
          ) : (
            movieDetails.genres?.map((genre) => {
              return <GenreTag genre={genre.name} />;
            })
          )}
        </div>
        <div>
          Status: {movieDetails ? movieDetails.status : <Placeholder />}
        </div>
        <div>
          Rating: {movieDetails ? movieDetails.vote_average : <Placeholder />}
        </div>

        <div>Release Date: {release_date}</div>
      </div>
    </div>
  );
};
