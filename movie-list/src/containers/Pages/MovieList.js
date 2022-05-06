import React from "react";
import { useState } from "react";

const MovieList = () => {
  const [curpage, setCurpage] = useState(1);
  const [movies, setmovies] = useState([]);
/* 
  function likeMovie(id) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function blockMovie(id) {
    setmovies(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
 */



  return (
    <div>
      <div>
        <button>-</button>
        <p>{curpage}/1000 page</p>
        <button>+</button>
      </div>
      <div>
        {/* {movies.map((movie) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}; */}
      </div>
    </div>
  );
};

export default MovieList;
