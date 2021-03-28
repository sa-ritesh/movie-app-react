import React from "react";
import { addfavourites, removeFavourites } from "../actions";
class MovieCard extends React.Component {
  makeFavourites = () => {
    const { movie } = this.props;
    console.log("movie", movie);

    this.props.store.dispatch(addfavourites(movie));
    console.log(this.props.store.getState());
    this.setState({
      state: this.props.store.getState(),
    });
  };
  removeFavourites = () => {
    const { movie } = this.props;
    console.log("movie", movie);
    const { favourites } = this.props.store.getState();
    const newFavourites = favourites.filter((indexVal) => {
      return indexVal != movie;
    });
    this.props.store.dispatch(removeFavourites(newFavourites));
    console.log(this.props.store.getState());

    this.setState({
      state: this.props.store.getState(),
    });
  };
  render() {
    console.log("Render");
    const { movie } = this.props;
    const { isFavourite } = this.props.store.getState();
    console.log("isFavourite", isFavourite);
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="Poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={() => this.removeFavourites()}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={() => this.makeFavourites()}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
