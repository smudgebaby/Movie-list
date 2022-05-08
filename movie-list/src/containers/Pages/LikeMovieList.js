import React from "react";
import LikeMovieListCard from "../../Components/Card/LikeMovieListCard";
import './LikeMovieList.css'
import { useSelector, useDispatch } from 'react-redux';
import {unlike, likedToBlocked} from '../../features/movieList/AllInOneSlice.js'

export default function LikeMovieList(){
  const [likedMovies, setLikedMovies] = React.useState([])
  const [blokedMovies, setBlockedMovies] = React.useState([])
  const dispatch = useDispatch();
  function UnlikeMovie(id){
    dispatch(unlike(id))
    setLikedMovies(useSelector((state) => state.movieList.liked))
  }

  function BlockMovie(){

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
      <div>LikeMovieList</div>
      <div className="container">
        {props.map(item =>{
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


