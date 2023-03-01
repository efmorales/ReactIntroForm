import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import Table from './components/Table';
import movieDB from './db/movies';
import Search from './components/Search';

// create a simple component called MovieForm


class App extends Component {

  state = movieDB;

  // add Movie
  addMovie = (movie) => {
    const movies = [...this.state.movies, movie];
    this.setState({ movies });
  }

  // delete Movie
  deleteMovie = (index) => {
    const movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({ movies });
  }

  // search Movie
  searchMovie = (searchTerm) => {
    const movies = [...this.state.movies];
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({ movies: filteredMovies });
  }

  render() {
    return (
      <div className="App">
        <h1>My Movie DB</h1>
        <Search searchMovie={this.searchMovie} />
        <Table movieData={this.state.movies} deleteMovie={this.deleteMovie} />
        <MovieForm addMovie={this.addMovie} />
      </div>
    )
  }
}


export default App;
