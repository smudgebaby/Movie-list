import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { like, block, update } from "../../features/movieList/AllInOneSlice";

const MovieList = () => {
  const fetchurl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=86114ad4ef0d64d69fc3890cc82c2f14&language=en-US&page=";
  const [curpage, setCurpage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("None");
  const [liked, setLiked] = useState(new Set());
  const [blocked, setBlocked] = useState(new Set());

  const pageIds = useSelector((state) => state.movieList.pageIds);
  const movieInfos = useSelector((state) => state.movieList.movieInfo);

  /* update data for page 1 */
  useEffect(() => {}, []);

  /* update data when page changed */
  useEffect(() => {}, [curpage]);

  /* update data when filter changed */
  /*  useEffect(()=>{
    if(sortBy == 'id'){

    }
    elif (sortBy == 'vote'){

    }
    elif (sortBy == 'liked'){

    }
    elif (sortBy == 'date'){

    }
  },[sortBy]) */

  /* update data when liked changed */
  /*  useEffect(()=>{
    if(sortBy == 'id'){

    }
    elif (sortBy == 'vote'){

    }
    elif (sortBy == 'liked'){

    }
    elif (sortBy == 'date'){

    }
  },[sortBy]) */

  /* update data when blocked changed */
  /*  useEffect(()=>{
    if(sortBy == 'id'){

    }
    elif (sortBy == 'vote'){

    }
    elif (sortBy == 'liked'){

    }
    elif (sortBy == 'date'){

    }
  },[sortBy]) */

  /*   
  if (!(curpage in pageIds)) {
    const url = fetchurl + curpage
    fetch(url)
        .then(res => {
            
        }
        setData(res.json());
        })
        .catch( error => {
            console.warn(`sorry an error occurred, due to ${error.message} `);
            setData(null);
            setError(error.message);
        }

  }
  let curpagemovies=[]
  pageIds.curpage.forEach((id)=>
    curpagemovies.push(movieInfos[id])
  )
  setmovies(curpagemovies)

 */

  function pageUp() {
    setCurpage((prev) => {
      return prev + 1;
    });
  }

  function pageDown() {
    setCurpage((prev) => {
      return prev - 1;
    });
  }

  /* 
  function filetera() {
    setCurpage(prev => {
      return prev-1;
    });
  }

  function fileterb() {
    setNotes(prev => {
      return prev+1;
    });
  }
  function fileterc() {
    setCurpage(prev => {
      return prev-1;
    });
  }

  function filterd() {
    setNotes(prev => {
      return prev+1;
    });
  }



  function blockMovie(id) {
    setmovies(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  function likeMovie(id) {
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
        {curpage === 1 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={pageDown}>-</button>
        )}
        <span>{curpage}/1000 page</span>
        {curpage === 1000 ? (
          <button disabled>+</button>
        ) : (
          <button onClick={pageUp}>+</button>
        )}
      </div>
      <div>
        <button>Title</button>
        <button>Vote Average</button>
        <button>Release Date</button>
        <button>Popularity</button>
      </div>
      <div>
        {/* {movies.map((movie) => {
          if movie.id in blocked list{}
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
