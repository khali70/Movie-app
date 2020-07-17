import React from "react";
import { connect } from "react-redux";
import MovieCart from "./MovieCart";
function Movies({ movies = [], error }) {
  return (
    <div className="row">
      {movies.map((item, index) => (
        <MovieCart key={index} {...item} />
      ))}
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};
export default connect(MapStateToProps)(Movies);
