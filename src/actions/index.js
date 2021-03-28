export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addfavourites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}
export function removeFavourites(favourites) {
  return {
    type: REMOVE_FAVOURITES,
    favourites,
  };
}
