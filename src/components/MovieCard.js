import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log("hello");
    console.log(movie);
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <button className="favourite-btn">Favoutite</button>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
