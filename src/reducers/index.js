import {
  ADD_FAVOURITES,
  ADD_MOVIES,
  REMOVE_FAVOURITES,
  SHOW_FAVOURITES,
} from "../actions";
const initialMovieState = {
  list: [],
  favourites: [],
  isFavourite: false,
};
export default function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES: {
      return { ...state, list: action.movies };
    }
    case ADD_FAVOURITES: {
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
        isFavourite: true,
      };
    }
    case REMOVE_FAVOURITES: {
      return {
        ...state,
        favourites: action.favourites,
        isFavourite: false,
      };
    }

    default:
      return state;
  }
}
