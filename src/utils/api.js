const apiKey = "9f1aabd12914b171540ce3c70fe36b7d";

export const fetchSearchResults = async (searchString) => {
  const fetchSearchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=1&include_adult=false`;

  const result = await fetch(fetchSearchMovieUrl);
  const jsonResult = await result.json();
  return jsonResult.results;
};
