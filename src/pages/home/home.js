
import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Search from "../../components/Search/Search";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=73cd4548c861b46a5bf8798b62809e90&language=en-US")
        .then(res => res.json())
        .then((data) => {
            const filteredMovies = data.results.splice(7,15);
        setPopularMovies(filteredMovies);
        });
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    selectedItem={selectedItem} 
                    onChange={setSelectedItem}
                >
                    {
                        popularMovies.map( movie => (
                           
                           <Link key={movie} style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}` } alt={movie?.title || "Movie Poster"}/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <Search/>
                
                <MovieList />
            </div>
        </>
    )
}

export default Home;