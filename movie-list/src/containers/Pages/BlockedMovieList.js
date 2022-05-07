import React from "react";
import BlockedMovieListCard from './BlockedMovieListCard'

const BlockedMovieList = () => {
  return (
    <div>
      <div>BlockedMovieList</div>
      {/* temp setting, will change by map */}
      <BlockedMovieListCard />
    </div>
  )
};

export default BlockedMovieList;
