import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { APIKEY } from "../APIKEY";
import { GETMOVIE, LOADING } from "../Redux /actions";
import Spinner from "./spin_baby";

class SingleMovie extends Component {
  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${APIKEY}&i=${this.props.match.params.id}`
      )
      .then((res) =>
        this.props.dispatch({ type: GETMOVIE, payload: { res: res.data } })
      )
      .catch((err) => console.log(err));
    this.props.dispatch({ type: LOADING });
  }
  render() {
    const {
      Title,
      Genre,
      Released,
      imdbRating,
      Director,
      Writer,
      Actors,
      Plot,
      imdbID,
      Poster,
      Rated,
    } = this.props.movie;

    return (
      <>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-4 card card-body">
                <img src={Poster} className="thumbnail" alt="Poster" />
              </div>
              <div className="col-md-8">
                <h2 className="mb-4">{Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {Rated}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating:</strong> {imdbRating}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {Actors}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="card card-body bg-dark my-5 text-light">
                <div className="col-md-12">
                  <h3>About </h3>
                  {Plot}
                  <hr />
                  <a
                    href={"https://www.imdb.com/title/" + imdbID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on IMDB
                  </a>
                  <Link to="/" className="btn btn-default text-light">
                    Go Back To Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    loading: state.movies.loading,
  };
};
export default connect(MapStateToProps)(SingleMovie);
