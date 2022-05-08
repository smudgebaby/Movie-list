import React, { useEffect, useState } from "react";
import MovieListCard from "../../Components/Card/MovieListCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";

const MovieList = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=29690f179ec220f023f10bc594c0637e";
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setMovies(responseJson.results);
    } catch (err) {
      console.log("catch err this is wrong", err);
    }
  };
  useEffect(() => {
    getMovieRequest();
  }, []);
  console.log(movies);

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
