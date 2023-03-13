import movieDB from '../db/movies';
import { Link, useParams } from 'react-router-dom';

// we will use the title as a param to find the movie in the database

// the database is in the file db/movies.js

export default function MoviePage() {
    const { filmTitle } = useParams();
    const movie = movieDB.movies.find((movie) => movie.title === filmTitle);
    return (
        <div>
            <h1>{movie.title}</h1>
            <p> <strong>Year of release:</strong> {movie.year}</p>
            <p> <strong>Director:</strong> {movie.director}</p>
            {/* <p> <strong>Actors:</strong> {movie.actors}</p> */}
            <p> <strong>Genre:</strong> {movie.genre}</p>
            <p><strong>IMDB rating:</strong> {movie.imdbRating}</p>
            <p> <strong>Plot: </strong> {movie.plot}</p>
            <Link to="/movies">Back to movies</Link>
        </div>
    );

}