import React, { useRef, useState } from "react";
import { fetchMovieDetails } from "../utils/api";

export const Movie = ({
  id,
  title,
  release_date,
  poster_path,
  backdrop_path,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const alreadyFetched = useRef();

  const imgUrl = `
    https://image.tmdb.org/t/p/w500${poster_path}`;

  const backdropUrl = `
    https://image.tmdb.org/t/p/w500${backdrop_path}`;

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
    return <span className="h-4 w-12 bg-gray-dark rounded inline-block"></span>;
  };

  const GenreTag = ({ genre }) => {
    return (
      <span className="rounded border-2 border-gray-light bg-gray-dark font-bold text-gray-light mr-2 p-1">
        {genre}
      </span>
    );
  };

  const Content = ({ children }) => {
    return <span className="font-bold">{children}</span>;
  };

  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleClick}
      className="mb-4 mr-6 p-4 rounded-lg border-2 text-gray-light border-primary-main cursor-pointer group"
    >
      <h3 className="text-2xl ml-4 font-bold">
        {title}{" "}
        <span className="font-normal">({release_date?.substring(0, 4)})</span>
      </h3>

      <div className={`${showDetails ? "block" : "hidden"} m-4 flex w-full`}>
        <div className="w-1/4">
          <img
            className="border-2 rounded border-gray group-hover:border-secondary-main mb-4"
            src={imgUrl}
            alt={title}
            width="400px"
          />

          <div className="mt-2">
            Status:{" "}
            {movieDetails ? (
              <Content>{movieDetails.status}</Content>
            ) : (
              <Placeholder />
            )}
          </div>
          <div>
            Rating:{" "}
            {movieDetails ? (
              <Content>{movieDetails.vote_average}</Content>
            ) : (
              <Placeholder />
            )}
          </div>

          <div>
            Release Date: <Content>{release_date}</Content>
          </div>
        </div>
        <div className="w-3/4 pl-6">
          <div>
            {movieDetails?.genres?.map((genre) => {
              return <GenreTag key={genre.id} genre={genre.name} />;
            })}
          </div>
          <p className="my-4">{movieDetails?.overview}</p>
        </div>
      </div>
    </div>
  );
};
