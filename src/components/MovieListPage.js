
import { Component } from 'react';
import movieDB from '../db/movies';

export default class MovieListPage extends Component {
    
    state = {
        movieDB: movieDB
    } 


    render() {
        return (
            <div>
                <h1>Movie List</h1>
                <ul>
                    {this.state.movieDB.movies.map(movie => (
                        <li key={movie.title}>
                            <a href={`/movies/${movie.title}`}>
                            {movie.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}