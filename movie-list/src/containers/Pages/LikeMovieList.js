import React from "react";
import LikeMovieListCard from "../../Components/Card/LikeMovieListCard";
import './LikeMovieList.css'
import { useSelector, useDispatch } from 'react-redux';
import {unlike, likedToBlocked} from '../../features/movieList/AllInOneSlice.js'

export default function LikeMovieList(){
  
  const dispatch = useDispatch();
  const movieInfo = useSelector((state)=> state.movieList.movieInfo)

  var likedIds = useSelector((state) => state.movieList.liked)
  var likedInfo = movieInfo.filter(m => likedIds.includes(m.id)) 
  const [likedMovies, setLikedMovies] = React.useState(likedInfo)

  function UnlikeMovie(id){
    dispatch(unlike(id))
    setLikedMovies(prevMovies =>{return prevMovies.filter(m=>m.id !==id)})
  }

  function BlockMovie(id){
    dispatch(likedToBlocked(id))
    setLikedMovies(prevMovies =>{return prevMovies.filter(m=>m.id !==id)})
  }

  //console.log(movieInfo)
  //console.log(likedMovies)

  return (
    <div>
      <div>LikeMovieList</div>
      <div className="container">
        {likedMovies.map(item =>{
          return (
            <LikeMovieListCard 
            poster_path={item.poster_path}
            id = {item.id}
            addUnlike={UnlikeMovie}
            addBlock={BlockMovie}
            />
          );
        })}
      </div>
    </div>
  
  )
}
