const API_KEY = "4eee2347d333e477301d412f11461220";

const requests = {
    fetchPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
}

export default requests;