import React, { Component } from 'react';
import './movies.css';
import axios from 'axios';

class Movies extends Component {

    state = {
        movies: {}
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e3b88ea03f5f916f87b2657d0a7a6ebf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(response => {
                console.log('got it')
                this.setState({movies: response.data})
                console.log(this.state.movies)
            })
    }


    getMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=e3b88ea03f5f916f87b2657d0a7a6ebf')
    }


    render() {

        // let moviesMap = this.state.movies.map((movie, i) => {
        //     return (
        //         div.movie
        //     )
        // })
        return (
            <div className="movies-body">
                <div className="search-bar-container">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="results-container">
                    {/* {this.state.moviesMap} */}
                </div>
            </div>
        );
    }
}

export default Movies;