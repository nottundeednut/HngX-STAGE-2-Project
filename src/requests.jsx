const API_KEY = "4eee2347d333e477301d412f11461220";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
