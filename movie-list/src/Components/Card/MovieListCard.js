import React from "react";
import "./MovieListCard.css";

const MovieListCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="m-3 movie_card">
          <div className="movie_card-container">
            <img
              className="movie_card-poster"
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
              alt="movie-poster"
            ></img>
            <div className="movie_card-info">
              <h3>{movie.title}</h3>
              <span className="green">{movie.vote_average}</span>
            </div>
            <div className="movie_card-releaseDate">
              <h5>{movie.release_date}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieListCard;
