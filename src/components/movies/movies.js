import React, { Component } from 'react';
import './movies.css';
import axios from 'axios';

class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        let loadMovies = this.getMovies();
    }


    getMovies = () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e3b88ea03f5f916f87b2657d0a7a6ebf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(response => {
                this.setState({movies: response.data.results})
                console.log(this.state.movies)
                
            })
    }
    getMoviePoster = (movie) => {
        axios.get(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
            .then(results => {
                console.log('got the image')
                this.setState({posterImage: results.data})
                return this.state.posterImage;
            })
    }


    render() {

        let moviesMap = this.state.movies.map((movie, i) => {
            
            
            return (
                <div className="movie-card">
                    Title: {movie.title}
                    {this.getMoviePoster(movie)}
                </div>
            )
        })
        // console.log(this.state.movies)
        return (
            <div className="movies-body">
                <div className="search-bar-container">
                    <input type="text" placeholder="Search"/>
                    <button>SEARCH</button>
                </div>
                <div className="results-container">
                    {moviesMap}
                </div>
            </div>
        );
    }
}

export default Movies;