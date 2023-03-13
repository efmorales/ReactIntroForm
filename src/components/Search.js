// Search component is a class component. It has a form, an input, a radio button and a submit button. 

import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchType: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // search movie by term and type
        this.props.searchMovie(this.state.searchTerm, this.state.searchType);

        // reset the form
        this.setState({
            searchTerm: '',
            searchType: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Search</h2>
                <label>
                    Search by:
                    <select name="searchType" value={this.state.searchType} onChange={this.handleChange}>
                        <option value="title">Title</option>
                        <option value="director">Director</option>
                        <option value="year">Year</option>
                    </select>
                </label>
                <label>
                    Search Term:
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
        )
    }
}

export default Search;