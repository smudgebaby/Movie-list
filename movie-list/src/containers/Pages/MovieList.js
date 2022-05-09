import React from "react";
import { useState, useEffect}from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
  like,
  unlike,
  block,
  update
} from '../../features/movieList/AllInOneSlice'

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
        setMovieinfos(pre => [...pre,movieThisPage])
    })
    } else {
      const movieThisPage=movieinfos.slice((curpage-1)*20,curpage*20+1)
      setMovies(movieThisPage)
    }
  },[curpage])
  
  /* update data when filter changed */
  useEffect(()=>{
    if(sortBy === 'id'){
      setMovies(pre=>pre.sort((a,b) => {return b.title.localeCompare(a.title);}))
    }
    else if (sortBy === 'vote'){
      setMovies(pre=>pre.sort((a,b) => {return b.vote_average - a.vote_average;}))
    }
    else if (sortBy === 'liked'){
      setMovies(pre=>pre.sort((a,b) => {return b.vote_count - a.vote_count;}))
    }
    else if (sortBy === 'date'){
      setMovies(pre=>pre.sort((a,b) => {return new Date(b.release_date) - new Date(a.release_date);}))
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
      return {/*(
             <Card
              liked = {likedStatus}


            />) */}
    })

    setRealdata(torender)
    }
  ,[liked,blocked,movies]) 
  /* update data when blocked changed */
 /*  useEffect(()=>{
    
    }
  },[blocked]) */




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
      setMovies(prev => prev.reverse())
    }
    else{
      setSortBy('Title')
    }
  }

  function fileterVoteAverage() {
    if(sortBy==='VoteAverage'){
      setMovies(prev => prev.reverse())
    }
    else{
      setSortBy('VoteAverage')
    }
  }
  
  function fileterReleaseDate() {
    if(sortBy==='ReleaseDate'){
      setMovies(prev => prev.reverse())
    }
    else{
      setSortBy('VReleaseDate')
    }
  }

  function filterVoteCount() {
    if(sortBy==='VoteCount'){
      setMovies(prev => prev.reverse())
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
      <div>
        {realData}
      </div>
    </div>
  );
};

export default MovieList;
