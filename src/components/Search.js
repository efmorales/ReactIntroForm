// Component "search" will be a form with an input tag with a placeholder of "Search" and a type of "text". It will have an onChange event handler that will call the function "handleChange" and pass in the event object. It will also have a value attribute that is equal to the state property "searchTerm". It will also have a class of "searchInput". OnFormSubmit, it will call the function "searchMovie" and pass in the state property "searchTerm". It will also have a class of "searchForm".

// It will search through the movies.js array of objects and return a new array of movies that match the search term. It will then pass that array to the Table component.

// The Table component will then render the new array of movies.

import React, { Component } from 'react';

class Search extends Component {

    constructor (props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchMovie(this.state.searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="searchForm">
                <input type="text" name="searchTerm" className="searchInput" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
            </form>
        );
    }
}

export default Search;