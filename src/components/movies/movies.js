import React, { Component } from 'react';
import './movies.css';
import axios from 'axios';

class Movies extends Component {

    state = {
        movies: [],
        movieImage: '',
        pageNumber: 1
    }

    componentDidMount() {
        let loadMovies = this.getMovies(this.state.pageNumber);
        console.log(this.props)
    }


    getMovies = (num) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e3b88ea03f5f916f87b2657d0a7a6ebf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`)
            .then(response => {
                this.setState({movies: response.data.results})
                console.log(response.data)
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

    pageUp = (e) => {
        e.preventDefault();
        console.log('hit')
        this.setState({pageNumber: this.state.pageNumber + 1})
        this.getMovies(this.state.pageNumber);
        
        
    }


    render() {
        console.log('render')

        
        let moviesMap = this.state.movies.map((result, i) => {
            let movieImageUrl = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
            return (
                <div className='movie-card'>
                        <img src={movieImageUrl} height='350px' width='250px' />    
                        {result.title}
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
                <div>
                    showing page {this.state.pageNumber} of 500
                    <button onClick={this.pageDown}>previous</button>
                    <button onClick={this.pageUp}>next</button>
                </div>
                <div className="results-container">
                    
                    
                    {moviesMap}
                </div>
            </div>
        );
    }
}

export default Movies;