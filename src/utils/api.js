const apiKey = "9f1aabd12914b171540ce3c70fe36b7d";

export const fetchSearchResults = async (searchString) => {
  const fetchSearchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=1&include_adult=false`;

  const result = await fetch(fetchSearchMovieUrl);
  const jsonResult = await result.json();
  return jsonResult.results;
};

export const fetchAllMovies = async (page) => {
  const fetchMovieUrl = `
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

  const result = await fetch(fetchMovieUrl);
  const jsonResult = await result.json();
  return jsonResult.results;
};

export const fetchMovieDetails = async (id) => {
  const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const result = await fetch(detailsUrl);
  const jsonResult = await result.json();
  return jsonResult;
};
