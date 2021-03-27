import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions/index.js";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("BEFORE", this.props.store.getState());
    const { store } = this.props;
    store.dispatch(addMovies(data));

    this.setState({
      state: this.props.store.getState(),
    });
    console.log("AFTER", this.props.store.getState());
  }
  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
              return <MovieCard movie={movie} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
