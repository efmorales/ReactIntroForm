import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import Table from './components/Table';
import movieDB from './db/movies';

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

  render() {
    return (
      <div className="App">
        <h1>My Movie DB</h1>
        <Table movieData={this.state.movies} deleteMovie={this.deleteMovie} />
        <MovieForm addMovie={this.addMovie} />
      </div>
    )
  }
}


export default App;
