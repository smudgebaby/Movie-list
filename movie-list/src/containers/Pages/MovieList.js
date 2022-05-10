import React from "react";
import { useState, useEffect}from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
  like,
  unlike,
  block,
  update
} from '../../features/movieList/AllInOneSlice';
import MovieListCard from '../../Components/Card/MovieListCard';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

const MovieList = () => {
  const dispatch = useDispatch();
  const fetchurl = 
  'https://api.themoviedb.org/3/movie/top_rated?api_key=86114ad4ef0d64d69fc3890cc82c2f14&language=en-US&page='
  const [curpage, setCurpage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [movieinfos,setMovieinfos] = useState(useSelector(state=> state.movieList.movieInfo));
  const [sortBy, setSortBy] = useState('None');
  const [liked, setLiked] = useState(useSelector(state=>state.movieList.liked));
  const [blocked, setBlocked] = useState(useSelector(state=>state.movieList.blocked));
  const [realData,setRealdata] = useState([])
  
  /* update data when first render and page changed */
  useEffect(()=>{
    if (movieinfos.length<curpage*20) {  
      fetch(fetchurl + curpage)
      .then(response => response.json())
      .then(data => {
        const movieThisPage=data.results;
        dispatch(update(movieThisPage))
        setMovies(movieThisPage)
        setMovieinfos(pre => {
          let newinfos = [...pre]
          movieThisPage.forEach(element => {
            newinfos.push(element)
          });
          return newinfos
        })
        setSortBy('None')
    })
    } else {
      const movieThisPage=movieinfos.slice((curpage-1)*20,curpage*20+1)
      setMovies(movieThisPage)
      setSortBy('None')
    }
  },[curpage])
  
  
  /* update data when filter changed */
  useEffect(()=>{
    let toSort = [...movies]
    if(sortBy === 'Title'){
      setMovies(toSort.sort((a,b) => {return b.title.localeCompare(a.title);}))
    }
    else if (sortBy === 'VoteAverage'){
      setMovies(toSort.sort((a,b) => {return b.vote_average - a.vote_average;}))
    }
    else if (sortBy === 'VoteCount'){
      setMovies(toSort.sort((a,b) => {return b.vote_count - a.vote_count;}))
    }
    else if (sortBy === 'ReleaseDate'){
      setMovies(toSort.sort((a,b) => {return new Date(b.release_date) - new Date(a.release_date);}))
    }
    else {
      setMovies(pre=>pre)
    }
  },[sortBy])

/* update data when liked/blocked/movies changed */
  useEffect(()=>{
    let cur = [...movies]
    cur = cur.filter(movie => {return (!blocked.includes(movie.id))})
    const torender = cur.map(movie => {
      let likedStatus = false
      if (liked.includes(movie.id)){
            likedStatus = true
          }
      return (
            <MovieListCard
              key = {uuidv4()}
              liked = {likedStatus}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
              rate={movie.vote_average}
              release_date={movie.release_date}
              vote_count={movie.vote_count}
              onUnLiked={unlikeMovie}
              onLiked={likeMovie}
              onBlock={blockMovie}
            />
             ) 
    })
    setRealdata(torender)
    }
  ,[liked,blocked,movies]) 

  function pageUp() {
    setCurpage(prev => {
      return prev+1;
    });
  }

  function pageDown() {
    setCurpage(prev => {
      return prev-1;
    });
  }

   
  function fileterTitle() {
    if(sortBy==='Title'){
      let newlist = [...movies]
      setMovies(newlist.reverse())
    }
    else{
      setSortBy('Title')
    }
  }

  function fileterVoteAverage() {
    if(sortBy==='VoteAverage'){
      let newlist = [...movies]
      setMovies(newlist.reverse())
    }
    else{
      setSortBy('VoteAverage')
    }
  }
  
  function fileterReleaseDate() {
    if(sortBy==='ReleaseDate'){
      let newlist = [...movies]
      setMovies(newlist.reverse())
    }
    else{
      setSortBy('ReleaseDate')
    }
  }

  function filterVoteCount() {
    if(sortBy==='VoteCount'){
      let newlist = [...movies]
      setMovies(newlist.reverse())
    }
    else{
      setSortBy('VoteCount')
    }
  }

 

  function blockMovie(id) {
    dispatch(block(id))
    setBlocked(pre => [...pre,id]);
  }


  function likeMovie(id) {
    dispatch(like(id))
    setLiked(pre => [...pre,id]);
  };

  function unlikeMovie(id) {
    dispatch(unlike(id))
    setLiked(pre => pre.filter(a=>a!==id));
  };
  



 

  return (
    <div>
      <div>
        {curpage === 1 ? <button disabled>-</button>:<button onClick={pageDown}>-</button>}
        <span>{curpage}/1000 page</span>
        {curpage === 1000 ? <button disabled>+</button>:<button onClick={pageUp}>+</button>}
      </div>
      <div>
        <button onClick={fileterTitle}>Title</button>
        <button onClick={fileterVoteAverage}>Vote Average</button>
        <button onClick={fileterReleaseDate}>Release Date</button>
        <button onClick={filterVoteCount}>Vote Count</button>

      </div>
      <div className={"container-fluid d-flex flex-wrap justify-content-center "}>
        {realData}
      </div>
    </div>
  );
};

export default MovieList;
