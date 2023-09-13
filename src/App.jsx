import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div>
      <h1>Testing</h1>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
