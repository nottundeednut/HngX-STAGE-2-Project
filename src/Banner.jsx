import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4eee2347d333e477301d412f11461220&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((json) =>
        setMovie(json.results[Math.floor(Math.random() * json.results.length)])
      );
  };

  //snippet of code that runs on specific condition
  useEffect(() => {
    //runs once cos []
    getMovie();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
