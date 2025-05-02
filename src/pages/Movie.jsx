import { useParams } from "react-router-dom";
import { movies } from "../data";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>; // Handle missing movie
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Runtime: {movie.time}</p>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}