import React, { useState, useEffect } from "react";
import "./MovieList.css";

function MovieList({ title }) {
  const [movieList, setMovieList] = useState([]);

  const getMovieLists = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4eee2347d333e477301d412f11461220&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
    // .then(json => console.log(json.results));
  };

  //snippet of code that runs on specific condition
  useEffect(() => {
    //runs once cos []
    getMovieLists();
  }, []);

  return (
    <div className="grid">
      <h2> {title} </h2>
      <div className="grid_posters">
        {/* posters */}
        {movieList.map((movie) => (
          <img
            key={movie.id}
            className="grid_poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div> 
  );
}

export default MovieList;
