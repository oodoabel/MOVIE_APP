import { useEffect } from "react";
import "./App.css";
import "./search.svg";
import "./MovieCard.jsx";

interface Props {
  title: string;
}

const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6b4a9cca";

  const movie1 = {
    Title: "Pat and Mike",
    Year: "1952",
    imdbID: "tt0045012",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjI3OTk1MzMtYTAzYy00ZjczLWEyYTgtZmYyNTlmNDJkMmRhXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
  };

  const response = async ({ title }: Props) => {
    const answer = await fetch(`${API_URL}&s=${title}`);
    const data = await answer.json();
    console.log(data.Search);
  };

  useEffect(() => {
    response({ title: "mega" });
  }, []);

  return (
    <div className="app">
      <h1>emerge</h1>
      <div className="search">
        <input placeholder="Serch for movies" value="" onChange={() => {}} />
        <img src="search.svg" alt="search" onClick={() => {}} />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;
