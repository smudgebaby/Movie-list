import React from "react";
import BlockedMovieListCard from '../../Components/Card/BlockedMovieListCard'
import './BlockedMovieList.css'
import { useSelector, useDispatch } from 'react-redux';
import {unblock, blockedToLiked} from '../../features/movieList/AllInOneSlice.js'

export default function BlockedMovieList(){
  const [blokedMovies, setBlockedMovies] = React.useState(useSelector((state) => state.movieList.blocked))
  const dispatch = useDispatch();

  function UnblockMovie(id){
    dispatch(unblock(id))
    setBlockedMovies(useSelector((state) => state.movieList.blocked))
  }

  function LikeMovie(id){
    dispatch(blockedToLiked(id))
    //setLikedMovies(useSelector((state) => state.movieList.liked))
  }


  const props=[{
    id:"278",
    poster_path:"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {id:"211",
    poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
    },
    {
      id:"278",
      poster_path:"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      },
      {id:"211",
      poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
      },
      {
        id:"278",
        poster_path:"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {id:"211",
        poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
        },
        {
          id:"278",
          poster_path:"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          },
          {id:"211",
          poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
          }]
  

  
  return (
    <div>
      <div>BlockedMovieList</div>
      <div className="container">
        {props.map(item =>{
          return (
            <BlockedMovieListCard 
            poster_path={item.poster_path}
            id = {item.id}
            addUnBlock={UnblockMovie}
            addLike={LikeMovie}
            />
          );
        })}
      </div>
    </div>
  
  )
}