import React, { useState, useEffect } from "react";
import axios from "axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //snippet of code that runs on specific condition
  useEffect(() => {
    //runs once cos []
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>

      {/* posters */}
    </div>
  );
}

export default Row;
