import React from "react";
import BlockedMovieListCard from '../../Components/Card/BlockedMovieListCard'
import './BlockedMovieList.css'

export default function BlockedMovieList(){
  function unblockMovie(){

  }

  function likeMovie(){

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
            addUnBlock={unblockMovie}
            addLike={likeMovie}
            />
          );
        })}
      </div>
    </div>
  
  )
}
