import React, { Component } from 'react';

// we will transform the MovieForm component into a class component
// we will add a constructor method to the class
// we will add a render method to the class
// we will add a state object to the class
// the field required are:
// -title
// -actors
// -plot
// -imdbRating
// -director
// -year
// -date added
// we will add input fields to the render method to allow the user to enter data: title, director and year are the required fields, the rest are optional

class MovieForm extends Component {
    constructor (props) {
        super(props);
        this.initialState = {
            title: '',
            director: '',
            plot: '',
            actors: '',
            imdbRating: '',
            year: '',
            dateAdded: new Date().toString()
        }
        this.state = this.initialState;

    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newDate = new Date().toString();

        this.setState({dateAdded:newDate});

        
        this.props.addMovie(this.state);

        this.initialState.dateAdded = newDate;

        this.setState(this.initialState);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add a Movie</h2>
                <label>
                    Title:
                    <input type="text" name="title" className="titleInput" value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>
                    Director:
                    <input type="text" name="director" className="directorInput" value={this.state.director} onChange={this.handleChange} />
                    
                </label>
                <label>
                    Year:
                    <input type="text" name="year" className="yearInput" value={this.state.year} onChange={this.handleChange} />
                </label>
                <label>
                    Plot:
                    <input type="text" name="plot" className="plotInput" value={this.state.plot} onChange={this.handleChange} />
                    
                </label>
                <label>
                    Actors:
                    <input type="text" name="actors" className="actorsInput" value={this.state.actors} onChange={this.handleChange} />
                </label>
                <label>
                    IMDB Rating:
                    <input type="text" name="imdbRating" className="imdbRatingInput" value={this.state.imdbRating} onChange={this.handleChange} />
                </label>
               
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default MovieForm;