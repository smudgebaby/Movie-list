import React, { useEffect, useState } from "react";
import MovieListCard from "../../Components/Card/MovieListCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div className={"container-fluid d-flex flex-wrap justify-content-center "}>
      {movies.map((movie) => {
        return (
          <MovieListCard
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            rate={movie.vote_average}
            release_date={movie.release_date}
            vote_count={movie.vote_count}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
Re-pull the Card Component